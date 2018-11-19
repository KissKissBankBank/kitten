#!/usr/bin/perl

use v5.018;
use utf8;
use strict;
use version;
use warnings qw(all);
no if $] >= 5.017011, warnings => 'experimental::smartmatch';

use URI;
use Carp;
use YAML;
use Encode;
use Template;
use Pod::Usage;
use List::Util;
use Hash::Merge qw(merge);
use LWP::Simple;
use File::Touch;
use Getopt::Long;
use Data::Dumper;
use Log::Log4perl;
use File::Basename;
use FindBin qw($Bin);
use File::Path qw/make_path/;
use HTML::TokeParser::Simple;

# Main
#
our $VERSION = version->declare(2.2.21);
my %conf = %{ get_conf() };
my $log  = get_logger( \%conf );
process( \%conf );
$log->info("Static build complete");

# Subs
#

# saymynamesaymyname
# returns this script's file name
sub saymynamesaymyname { ( split( /\./, ( split( /\//, $0 ) )[-1] ) )[0] }

# subname
# Return the name of the parent caller, used in log calls
sub subname { ( split /::/, ( caller(1) )[3] )[1] }

sub get_conf {
    my %conf = (
        conf_file =>
          sprintf( '%s/../config/%s.yaml', $Bin, saymynamesaymyname() ),
        dump_dir => qq($Bin/../../../build),
        index    => q(main.html),
        location => q(http://127.0.0.1:3000/),
        log      => {
            log_level => q(INFO),
            file      => {
                filename =>
                  sprintf( '%s/../%s.log', $Bin, saymynamesaymyname() ),
                pattern   => q(%d] [%p] %m%n),
                mode      => q(append),
                autoflush => q(1),
            },
            screen => { stderr => 1, utf8 => 1, },
        },
    );

    # merge command line options into configuration hash
    GetOptions(
        'usage|u|h|help'      => sub { help(1) },
        'doc|perldoc|pd'      => sub { help(3) },
        'index|main|ii=s'     => \$conf{'index'},
        'conf|conf-file|c=s'  => \$conf{'conf_file'},
        'loglevel|level|ll=s' => \$conf{'log'}{'log_level'},
        'logfile|lfile|lf=s'  => \$conf{'log'}{'file'}{'filename'},
        'location|url|l=s'    => \$conf{'location'},
        'dump-dir|d|dir=s'    => \$conf{'dump_dir'},
      )
      or help(1)
      and exit(1);

    # Override built-in configuration directives
    # if a configuration file is found
    if ( -e $conf{'conf_file'} ) {
        my $file = $conf{'conf_file'};
        -f $file
          or croak( sprintf 'invalid log file name : %s', $file );
        my %etc_conf = %{ YAML::LoadFile($file) }
          or croak('load config file failed');
        %conf = %{ merge( \%conf, \%etc_conf ) };

        #die Dumper \%conf;
    }
    $conf{'log'}{'log_level'} = uc $conf{'log'}{'log_level'};

    #die Dumper \%conf;
    return \%conf;
}

sub get_logger {
    my %conf = %{ shift() };

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
    my $file = $conf{'log'}{'file'}{'filename'};
    if ( !-e $file ) {
        carp( sprintf 'Log file not found, creating: %s', $file );
        touch($file)
          or croak( sprintf 'could not create file : %s', $file );
    }
    Log::Log4perl->init( \$l4p_conf );
    my $log = Log::Log4perl->get_logger(__PACKAGE__);
    $log->debug( sprintf '%s - conf loaded', subname() );
    return $log;
}

# help
# print pod heredoc on STDERR
sub help {
    pod2usage(
        {
            -exitval => 0,
            -verbose => shift || 1,    #1=usage 3=full pod
            -output  => \*STDERR,
            -message =>
              sprintf( '%s %s', say( saymynamesaymyname() ), $VERSION ),
        }
    );
    return 1;
}

# process
#
sub process {
    %conf = %{ shift() };

    # create build directory if it doesn't exist
    if ( -d $conf{'dump_dir'} ) {
        $log->debug( sprintf '%s - output dir exists: %s',
            subname(), $conf{'dump_dir'} );
    }
    else {
        make_path( $conf{'dump_dir'} );
    }

    # get main url html content
    my $html = get( $conf{'location'} )
      or $log->logdie( sprintf '%s - get(%s) failed',
        subname(), $conf{'location'} );
    $log->debug( sprintf '%s - get() success: %s',
        subname(), $conf{'location'} );

    my $parser = HTML::TokeParser::Simple->new( handle => \$html );
    my $content = q{};

    # parse tokens, look for js, css, img links
    # rewrite urls and save files
    while ( my $token = $parser->get_token() ) {
        next
          if ( $token->as_is =~ m/ ^ \s$/xms );
        $log->trace( sprintf '%s - get_token(%s)', subname(), $token->as_is() );

        for my $t_ref (
            { 's_tag' => 'img',    'l_tag' => 'src' },
            { 's_tag' => 'script', 'l_tag' => 'src' },
            { 's_tag' => 'link',   'l_tag' => 'href' },
          )
        {
            $log->trace( sprintf '%s - t_ref looking for: %s %s',
                subname(), $t_ref->{'s_tag'}, $t_ref->{'l_tag'}, );

            if (    $token->is_start_tag( $t_ref->{'s_tag'} )
                and $token->get_attr( $t_ref->{'l_tag'} ) )
            {
                $log->debug( sprintf '%s - tag match: %s %s',
                    subname(), $t_ref->{'s_tag'}, $t_ref->{'l_tag'} );
                my $uri = $token->get_attr( $t_ref->{'l_tag'} );
                if ( uri_belongs_to_us( \%conf, $uri ) ) {
                    $token->set_attr( $t_ref->{'l_tag'} => rewrite_url($uri) );
                    create_tree_from_uri( \%conf, $uri );
                    if (    $token->is_start_tag('link')
                        and $token->get_attr('rel')
                        and $token->get_attr('href') )
                    {
                        # found some css files
                        # let's look for image links
                        $log->debug(
                            sprintf '%s - t_ref loop found css file: %s',
                            subname, $token->get_attr( $t_ref->{'l_tag'} ),
                        );
                        process_css( \%conf, $token->get_attr('href') );
                    }
                }
            }
        }

        # append modified content
        $content .= $token->as_is();
    }

    # print rewritten main html file
    open my $file, '>:encoding(UTF-8)',
      sprintf '%s/%s', $conf{'dump_dir'}, $conf{'index'}
      or $log->logdie( sprintf '%s - open failed: %s', subname, $! );
    print {$file} $content;
    close $file
      or $log->logdie( sprintf '%s - close failed - %s%s',
        subname, $conf{'dump_dir'}, $conf{'index'} );
    return 1;
}

# process_css
# scan css for 'url: content(SOME_URL)'
sub process_css {
    my %conf  = %{ shift() };
    my $uri   = shift;
    my $uri_o = URI->new($uri)
      or $log->logdie( sprintf '%s - invalid url: %s', subname, $uri );
    $log->debug( sprintf '%s - url %s', subname, $uri );

    # get url content
    my $content =
      $uri_o->scheme
      ? get( $uri_o->as_iri() )
      : get( $conf{'location'} . $uri_o->as_iri() );
    $content
      or $log->logdie( sprintf '%s - get failed', subname, $uri );

    my ( $name, $path, $suffix ) =
      fileparse( $uri_o->as_iri() );
    $log->trace( sprintf '%s - fileparse - name  %s path %s',
        subname, $name, $path );
    my @links;
    open my $handle, '<', \$content
      or $log->logdie( sprintf '%s - open scalar failed', subname );
    while (<$handle>) {
        m/\s*url\((.*)\)/xms
          and my $match = $1;
        next if !$match;
        next if List::Util::any { /$match/ } @links;
        my $link = sprintf( '%s%s', $path, $match );
        $log->debug( sprintf( '%s - content url - %s', subname, $link ) );
        push @links, $match;
    }
    close $handle
      or $log->logdie( '%s - coudlnt close handle', subname );
  LINK: for my $link (@links) {
        if ( !uri_belongs_to_us( \%conf, $link ) ) {
            $log->info( sprintf '%s - url %s is ours, processing url',
                subname, $link );
            next LINK;
        }
        my $tree = sprintf( '%s%s', $path, $link );
        create_tree_from_uri( \%conf, $tree );

    }
    return 1;
}

# create_tree_from_uri
# Create directories and files matching a given uri
sub create_tree_from_uri {
    my %conf = %{ shift() };
    my $url  = shift;

    my $uri_o    = URI->new($url);
    my $scheme   = $uri_o->scheme;
    my $uri_path = $uri_o->path();
    $log->debug( sprintf '%s - uri_path: %s', subname, $uri_path );
    $uri_path =~ s/^\///xms;
    $log->debug( sprintf '%s - uri_path: %s', subname, $uri_path );
    my $source =
      defined($scheme) ? $uri_o->as_iri() : $conf{'location'} . $uri_path;
    $log->debug( sprintf '%s - uri_path: %s', subname, $uri_path );
    $log->debug( sprintf '%s - base_url: %s', subname, $conf{'location'} );

    if ($source) {
        $log->debug( sprintf '%s - source: %s', subname, $source );
    }
    my $content = get($source);
    $content
      or $log->logdie( sprintf '%s - get failed: url %s', subname, $url );
    $log->debug(
        sprintf '%s - received url content from: %s',
        subname, $source

    );
    my ( $name, $path, $suffix ) = fileparse($uri_path);
    my $match;
    $path =~ m/^\//xms and $match = $1;
    my $directory =
      $match
      ? sprintf '%s%s', $conf{'dump_dir'}, $path
      : sprintf '%s/%s',
      $conf{'dump_dir'}, $path;

    if ( !-d $directory ) {
        make_path($directory)
          or $log->logdie(
            sprintf '%s - make_path failed: %s %s',
            subname,
            $directory, $!

          );
        $log->info(
            sprintf '%s - make_path created path: %s ',
            subname, $directory

        );
    }
    my $full_path = sprintf '%s%s', $directory, $name;
    open( my $file, '>:encoding(UTF-8)', $full_path )
      or $log->logdie( sprintf '%s - open failed: %s %s',
        subname, $full_path, $! );
    binmode $file;
    print {$file} $content;
    close $file
      or croak('couldnt close');
    $log->info(
        sprintf '%s - make_path created file: %s ',
        subname, $full_path

    );
    return 1;
}

# uri_belongs_to_us
# Determine if img url host is our url
# to avoid trying to copy google stuff etc
sub uri_belongs_to_us {
    my %conf = %{ shift() };
    my $url  = shift;
    print Dumper $url;
    my $uri = URI->new($url)
      or $log->debug( sprintf '%s - invalid url %s', subname, $url );

    my $belongs = 0;

    if ( $url =~ m/http(s):\/\//xms ) {
        $log->debug(
            sprintf '%s - source is a fully qualified url %s',
            subname, $url

        );

        # this src link has a host component,
        # check if it's the same as the app host
        # strip port to allow string comparison
        # between host and host:port
        my $uri_host      = $uri->host();
        my $base_uri_host = URI->new( $conf{'location'} )->host();
        if ($uri_host) {
            $log->trace( sprintf '%s - uri host: %s', subname(), $uri_host, );
            if ( $uri_host eq $base_uri_host ) {
                $log->info(
                    sprintf '%s - uris = match - uri_host: %s - base_url: %s',
                    subname(), $uri_host, $base_uri_host );
                $belongs = 1;
            }
            else {
                $log->info(
                    sprintf '%s - no match - uri_host: %s - base_url: %s',
                    subname(), $uri_host, $base_uri_host );
            }
        }

    }
    else {
        $belongs = 1;
    }
    return $belongs;
}

# rewrite_url
# make sure the url is valid and remove any starting "/"
sub rewrite_url {
    my $url = shift;
    my $uri = URI->new($url)
      or $log->logdie( sprintf '%s - invalid url %s', subname(), $url );

    ( my $link = $uri->path() ) =~ s{^/}{};
    $link
      or $log->logdie( sprintf( '%s - rewrite failed: %s', subname(), $url ) );
    return $link;
}
__END__

=head1 NAME

Fashionista - extract a static version of the Kitten styleguide

=head1 SYNOPSIS

perl fashionista.pl [ Options... ]

=head1 OPTIONS

--loglevel LOGLEVEL
# Change log minimum level

--conf FILE
# Specify the configuration file location

--url URL
# Specify the styleguide URL

--help (or --usage)
# Show this message

--dump-dir some/directory
# specify the site dump path

--doc
# print full perldoc page

Note:
all command line options override their
configuration file directives couterparts

=head1 DESCRIPTION

This is the web extractor for the Kitten styleguide

=head1 CONFIGURATION

This script looks for its default configuration file in $Bin/../$Bin.conf.
Configuration is done in the apache conf style.
see L<http://httpd.apache.org/docs/current/sections.html> for format

Keys include:
dir:
 Path to store the site mirror files
base_url:
 URL of the main site page to crawl
<log><file> filename SOME_LOG_FILE </file></log>:
 log file path
<log> loglevel LOGLEVEL </log>:
 minimum level of events to log, relevant values are
  -TRACE
  -DEBUG
  -NOTICE
  -INFO
  -ERROR
  -FATAL

=head1 INCOMPATIBILITIES

incompatible with versions of Perl below v5.18

=head1 AUTHOR

Morad IGMIR - L<morad.igmir@kisskissbankbank.com>

=cut
