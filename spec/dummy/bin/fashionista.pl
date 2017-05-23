#!/usr/bin/perl

use utf8;
use strict;
use warnings;
use open q{:encoding(utf8)};
no if $] >= 5.017011, warnings => 'experimental::smartmatch';

use URI;
use Carp;
use Encode;
use Template;
use LWP::Simple;
use File::Touch;
use Getopt::Long;
use Data::Dumper;
use Log::Log4perl;
use File::Basename;
use Config::General;
use FindBin qw($Bin);
use File::Path qw/make_path/;
use HTML::TokeParser::Simple;

our $VERSION = 2.0083;

sub usage {
    print <<'USAGE';

 Usage: 
  perl fashionista.pl --loglevel LOGLEVEL 
  # Change log level output. Possible values : INFO DEBUG
  
  perl fashionista.pl --conf FILE 
  # Specify the configuration file location
 
  perl fashionista.pl --location URL 
  # Specify the styleguide URL
 
  perl fashionista.pl --help 
  # Show this message (works also with --usage) 
 
  Note: 
   all command line options override their 
   configuration file directives couterparts 
USAGE
    return 1;
}
my $conf_file = '../fashionista.conf';
my ( $loglevel, $location, $usage );

GetOptions(
    'conf=s'     => \$conf_file,
    'loglevel=s' => \$loglevel,
    'location=s' => \$location,
    'usage'      => \$usage,
    'help'       => \$usage,
) or usage and exit;

if ($usage) { usage and exit; }

# Conf init
my ( %conf, %etc_conf );
%conf = (
    'dir'      => qq($Bin/../../../build),
    'index'    => 'main.html',
    'base_url' => 'http://localhost:3000/',
    'log'      => {
        log_level => 'INFO',
        file      => {
            filename  => qq($Bin/../fashionista.log),
            pattern   => '[%d] [%p] %m%n',
            mode      => 'append',
            autoflush => '1',
        },
        screen => { stderr => 1, utf8 => 1, },
    },
);

# Overload built-in configuration directives
# if a configuration file is found
if ( -e $conf_file ) {
    %etc_conf = Config::General->new(
        -ConfigFile            => $conf_file,
        -MergeDuplicateBlocks  => 1,
        -MergeDuplicateOptions => 1,
        -IncludeGlob           => 1,
        -UseApacheInclude      => 1,
        -UTF8                  => 1,

    )->getall();
    for my $etc_conf_key ( keys %etc_conf ) {
        $conf{$etc_conf_key} = $etc_conf{$etc_conf_key};
    }
}
if ($loglevel) { $conf{'log'}{'log_level'} = $loglevel; }
if ($location) { $conf{'log'}{'base_url'}  = $location; }

# Log4perl init
my $tt          = Template->new();
my $l4p_conf    = q();
my $tt_log_conf = <<'LOGCONF';
log4perl.rootLogger=[% log.log_level %],file,screen
log4perl.appender.file=Log::Log4perl::Appender::File
log4perl.appender.file.create_at_logtime = 1
log4perl.appender.file.layout=PatternLayout
log4perl.appender.file.layout.ConversionPattern=[% log.file.pattern %]
log4perl.appender.file.filename=[% log.file.filename %] 
log4perl.appender.file.mode=[% log.file.mode %]
log4perl.appender.file.autoflush=[% log.file.autoflush %]
log4perl.appender.screen=Log::Log4perl::Appender::Screen
log4perl.appender.screen.layout=Log::Log4perl::Layout::SimpleLayout
log4perl.appender.screen.layout.ConversionPattern=[% log.screen.pattern %]
LOGCONF

$tt->process( \$tt_log_conf, \%conf, \$l4p_conf ) or croak $tt->error();
if ( !-e $conf{'log'}{'file'}{'filename'} ) {
    carp( sprintf 'Log file not found, creating : %s',
        $conf{'log'}{'file'}{'filename'} );
    touch( $conf{'log'}{'file'}{'filename'} );
}
Log::Log4perl->init( \$l4p_conf );
my $log = Log::Log4perl->get_logger(__PACKAGE__);
$log->info('Fashionista -  conf loaded');

process();

# Subs
#

# subname
# Return the name of the parent caller
# used in log calls
sub subname { return ( split /::/, ( caller(1) )[3] )[1] }

# process:
#
sub process {

    # create build directory if it doesn't exist
    if ( -d $conf{'dir'} ) {
        $log->debug( sprintf '%s - output dir exists: %s',
            subname, $conf{'dir'} );
    }
    else {
        make_path( $conf{'dir'} );
    }

    # get main url html content
    my $html = get( $conf{'base_url'} );
    $html
      or $log->logdie(
        sprintf '%s - get() failed : %s', subname, $conf{'base_url'}

      );
    $log->debug(
        sprintf '%s - get() success : %s',
        subname,
        $conf{'base_url'}

    );

    my $parser = HTML::TokeParser::Simple->new( handle => \$html );
    my $content = q{};

    # parse tokens, look for js, css, img links
    # rewrite urls and host what's needed
    while ( my $token = $parser->get_token() ) {
        next if ( $token->as_is =~ m/^\s$/xms );
        $log->trace(
            sprintf '%s - get_token(%s)',
            subname,
            $token->as_is()

        );

        for my $t_ref (
            { 's_tag' => 'img',    'l_tag' => 'src' },
            { 's_tag' => 'script', 'l_tag' => 'src' },
            { 's_tag' => 'link',   'l_tag' => 'href' },
          )
        {
            $log->trace(
                sprintf '%s - t_ref look looking for  : %s %s',
                subname,
                $t_ref->{'s_tag'}, $t_ref->{'l_tag'},

            );

            if (    $token->is_start_tag( $t_ref->{'s_tag'} )
                and $token->get_attr( $t_ref->{'l_tag'} ) )
            {
                $log->debug(
                    sprintf '%s - tag match : %s %s',
                    subname, $t_ref->{'s_tag'},
                    $t_ref->{'l_tag'}

                );
                my $uri = $token->get_attr( $t_ref->{'l_tag'} );

                # is it one of ours ?
                if ( uri_belongs_to_us($uri) ) {

                    # host (to avoid trying to copy google stuff etc)
                    $token->set_attr( $t_ref->{'l_tag'} => rewrite_url($uri) );
                    create_tree_from_uri($uri);
                    if (    $token->is_start_tag('link')
                        and $token->get_attr('rel')
                        and $token->get_attr('href') )
                    {
                        # found some css files
                        # let's look for image links
                        $log->debug(
                            sprintf '%s - t_ref loop found css file : %s',
                            subname,
                            $token->get_attr( $t_ref->{'l_tag'} ),

                        );

                        process_css( $token->get_attr('href') );
                    }
                }

            }

        }

        # append modified content
        $content .= encode( 'UTF-8', $token->as_is(), Encode::FB_CROAK );
    }

    # print rewritten main html file
    open my $file, '>:encoding(UTF-8)', sprintf '%s/%s', $conf{'dir'},
      $conf{'index'}
      or $log->logdie( sprintf '%s - open failed : %s', subname, $! );
    print {$file} $content;
    close $file
      or $log->logdie( sprintf '%s - close failed - %s%s',
        subname, $conf{'dir'}, $conf{'index'} );
    return 1;
}

# process_css
# scan css for 'url: content(SOME_URL)'
sub process_css {
    my $uri   = shift;
    my $uri_o = URI->new($uri)
      or $log->logdie( sprintf '%s - invalid url : %s', subname, $uri );
    $log->debug( sprintf '%s - url %s', subname, $uri );

    # get url content
    my $content =
      $uri_o->scheme
      ? get( $uri_o->as_iri() )
      : get( $conf{'base_url'} . $uri_o->as_iri() );
    $content
      or $log->logdie( sprintf '%s - get failed', subname, $uri );

    my ( $name, $path, $suffix ) = fileparse( $uri_o->as_iri() );
    $log->trace( sprintf '%s - fileparse - name  %s path %s',
        subname, $name, $path );
    my @links;
    open my $handle, '<', \$content
      or $log->logdie( sprintf '%s - open scalar failed', subname );
  CSSLINE: while (<$handle>) {
        m/content: url\((.*)\)/xms
          and my $match = $1;
        next CSSLINE if !$match or any { /$match/xms } @links;
        my $link = sprintf( '%s%s', $path, $match );
        $log->debug( sprintf( '%s - content url - %s', subname, $link ) );
        push @links, $match;
    }
    close $handle
      or $log->logdie( '%s - coudlnt close handle', subname );
    for my $link (@links) {
        my $tree = sprintf( '%s%s', $path, $link );
        create_tree_from_uri($tree);
    }
    return 1;
}

# create_tree_from_uri
# Create directories and files matching a given uri
sub create_tree_from_uri {
    my $url      = shift;
    my $uri_o    = URI->new($url);
    my $scheme   = $uri_o->scheme;
    my $uri_path = $uri_o->path();
    $log->debug( sprintf '%s - uri_path : %s', subname, $uri_path );
    $uri_path =~ s/^\///xms;
    $log->debug( sprintf '%s - uri_path : %s', subname, $uri_path );
    my $source =
      defined($scheme)
      ? $uri_o->as_iri()
      : $conf{'base_url'} . $uri_path;
    $log->debug( sprintf '%s - uri_path : %s', subname, $uri_path );
    $log->debug( sprintf '%s - base_url : %s', subname, $conf{'base_url'} );

    if ($source) {
        $log->debug( sprintf '%s - source : %s', subname, $source );
    }
    my $content = get($source);
    $content
      or $log->logdie( sprintf '%s - get failed : url %s', subname, $url );
    $log->debug(
        sprintf '%s - received url content from : %s',
        subname, $source

    );
    my ( $name, $path, $suffix ) = fileparse($uri_path);
    my $match;
    $path =~ m/^\//xms and $match = $1;
    my $directory =
      $match
      ? sprintf '%s%s', $conf{'dir'}, $path
      : sprintf '%s/%s', $conf{'dir'}, $path;

    if ( !-d $directory ) {
        make_path($directory)
          or $log->logdie(
            sprintf '%s - make_path failed : %s %s',
            subname,
            $directory, $!

          );
        $log->info(
            sprintf '%s - make_path created path : %s ',
            subname, $directory

        );
    }
    my $full_path = sprintf '%s%s', $directory, $name;
    open( my $file, '>:encoding(UTF-8)', $full_path )
      or $log->logdie( sprintf '%s - open failed : %s %s',
        subname, $full_path, $! );
    print {$file} $content;
    close $file or croak('couldnt close');
    $log->info(
        sprintf '%s - make_path created file : %s ',
        subname, $full_path

    );
    return 1;
}

# host
# Determine if img url host is our url
# to avoid trying to copy google stuff etc
sub uri_belongs_to_us {
    my $url = shift;
    my $uri = URI->new($url)
      or $log->debug( sprintf '%s - invalid url %s', subname, $url );

    my $host = 0;

    if ( $url =~ m/http(s):\/\//xms ) {
        $log->debug(
            sprintf '%s - source is a fully qualified url %s',
            subname, $url

        );

        # this src link has a host component,
        # check if it's the same as the app host
        # strip port to allow string comparison
        # between host and host:port
        my $uri_host      = $uri->uri_belongs_to_us();
        my $base_uri_host = URI->new( $conf{'base_url'} )->uri_belongs_to_us();
        if ($uri_host) {
            $log->trace( sprintf '%s - uri host : %s', subname, $uri_host, );
            if ( $uri_host eq $base_uri_host ) {
                $log->debug(
                    sprintf '%s - uris = match - uri_host : %s - base_url : %s',
                    subname,
                    $uri_host, $base_uri_host

                );
                $host = 1;
            }
            else {
                $log->debug(
                    sprintf '%s - no match - uri_host : %s - base_url : %s',
                    subname, $uri_host, $base_uri_host );
            }
        }

    }
    else {
        $host = 1;
    }
    return $host;
}

# rewrite_url
# make sure the url is valid and remove any starting "/"
sub rewrite_url {
    my $url = shift;
    my $uri = URI->new($url)
      or $log->logdie( sprintf '%s - invalid url %s', subname, $url );

    ( my $link = $uri->path() ) =~ s{^/}{};
    $link
      or $log->logdie( sprintf( '%s - rewrite failed : %s', subname, $url ) );
    return $link;
}
__END__

=head1 NAME

Fashionista - extract a static version of the Kitten styleguide

=head1 SYNOPSIS

	perl fashionista.pl --loglevel LOGLEVEL 
	# Change log level output. Possible values : INFO DEBUG

	perl fashionista.pl --conf FILE 
	# Specify the configuration file location

	perl fashionista.pl --url URL 
	# Specify the styleguide URL

	perl fashionista.pl --help (or --usage) 
	# Show this message

	Note: 
		all command line options override their 
		configuration file directives couterparts 

=head1 DESCRIPTION

This is the extractor for the Kitten styleguide
It connects to the main styleguide page and attempts
to mirror it on disk in the specified "build" dir

=head1 AUTHOR

Morad IGMIR - L<morad.igmir@kisskissbankbank.com>

=cut
