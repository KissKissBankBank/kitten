#!/usr/bin/perl -lsw
# Author	: Morad IGMIR
# ABSTRACT:	Fashionista : crawler for the Karl Kitten showcase rails application

use utf8;
use strict;
use warnings;
use open ":encoding(utf8)";

use FindBin qw($Bin);
use Encode;
use URI;
use File::Path qw/make_path/;
use LWP::Simple;
use HTML::TokeParser::Simple;
use File::Basename;
use File::Touch;
use Data::Dumper;

my $dir           = qq($Bin/../../../build);
warn "output dir $dir"; 
my $base_host     = q(localhost:3000);
my $base_url      = q(http://) . $base_host . q(/);
my $base_uri      = URI->new( q(http://) . $base_host . q(/) );
my $base_uri_host = $base_uri->host();
$base_uri_host =~ s/:[0-9]+//;

# process
# - gets the home page, rewrites the html
# 	to make script src and link rel links relative
# -
if ( -d $dir ) {
    warn "$dir already exists";
}
else {
    make_path($dir) or die "make_path $dir : $!";
    print STDERR "created $dir";
}

sub process {
    # get url content
    my $html = get( $base_uri->as_string() );
    die "Couldn't get it!" unless defined $html;
    my $parser = HTML::TokeParser::Simple->new( handle => \$html );
		my $content = '';
    my $nomirror = 0;
  TOKEN:
    while ( my $token = $parser->get_token() ) {
        my $link;

        # look for <img src="...
        if ( $token->is_start_tag('img') && $token->get_attr('src') ) {
            my $src = $token->get_attr('src');
            my $uri = URI->new($src);
            warn 'img src';

            # determine if img url host is our url
            # host (to avoid trying to copy google stuff etc)
            if ( $src =~ m/http(s):\/\// ) {
                print STDERR "src is a fully qualified url : " . $src;
                my $uri_host = $uri->host();

                # this src link has a host component,
                # check if it's the same as the app host
                # strip port to allow string comparison
                # between host and host:port
                $uri_host =~ s/:[0-9]+//;
                warn("uris = $uri_host , $base_uri_host");
                if ( $uri_host eq $base_uri_host ) {
                    warn("uris in eq = $uri_host , $base_uri_host");
                    warn 'eq right script';
                    $link = $uri->path();
                    $link =~ s/^\///;
                    $token->set_attr( 'src' => $link );
										warn 'same uri token is'. $token->as_is();
                    create_tree_from_uri($uri);
                }
            }
            else {
                my $rel = $uri->path();
                $rel =~ s/^\///;
                $token->set_attr( 'src' => $rel );
                create_tree_from_uri($uri);
            }
        }
 
        # look for <script src="...
        if ( $token->is_start_tag('script') && $token->get_attr('src') ) {
            my $src = $token->get_attr('src');
            my $uri = URI->new($src);
            warn 'script src';

            # determine if script url host is our url
            # host (to avoid trying to copy google stuff etc)
            if ( $src =~ m/http(s):\/\// ) {
                print STDERR "src is a fully qualified url : " . $src;
                my $uri_host = $uri->host();

                # this src link has a host component,
                # check if it's the same as the app host
                # strip port to allow string comparison
                # between host and host:port
                $uri_host =~ s/:[0-9]+//;
                warn("uris = $uri_host , $base_uri_host");
                if ( $uri_host eq $base_uri_host ) {
                    warn("uris in eq = $uri_host , $base_uri_host");
                    warn 'eq right script';
                    $link = $uri->path();
                    $link =~ s/^\///;
                    $token->set_attr( 'src' => $link );
                    $token->set_attr( 'charset' => 'utf-8' );
										warn 'same uri token is'. $token->as_is();
                    create_tree_from_uri($uri);
                }
            }
            else {
                my $rel = $uri->path();
                $rel =~ s/^\///;
                $token->set_attr( 'src' => $rel );
                $token->set_attr( 'charset' => 'utf-8' );
                create_tree_from_uri($uri);
            }
        }
        if ( $token->is_start_tag('link') && $token->get_attr('rel') ) {
            warn 'link rel';
            my $src = $token->get_attr('href');
            my $uri = URI->new($src);

            if ( $src =~ m/http(s):\/\// ) {
                print STDERR "src is a full url : " . $src;
                my $uri_host = $uri->host();

                # if this src link has a host component,
                # check if it's the same as the app host
                # strip port to allow string comparison
                # between host and host:port
                $uri_host =~ s/:[0-9]+//;
                print(  '$uri_host : '
                      . $uri_host
                      . ' base_uri_host : '
                      . $base_uri_host );

                # if it's a local link make it relative
                # +save the file on disk in a relative path
                warn("uris = $uri_host , $base_uri_host");
                if ( $uri_host eq $base_uri_host ) {
                    warn("uris in eq = $uri_host , $base_uri_host");
                    warn 'eq right';
                    $link = $uri->path();
                    $link =~ s/^\///;
                    create_tree_from_uri($uri);
                }
                else {
                    $link = $token->get_attr('href');
                    warn(
"uris else eq  = $uri_host , $base_uri_host, link : $link"
                    );
                }
                $token->set_attr( 'href' => $link );
            }
            else {
                warn "uri is relative already : $src";
                $link = $uri->path();
                $link =~ s/^\///;
                $token->set_attr( 'href' => $link );
                create_tree_from_uri($uri);
            }
        }
        my $text = $token->as_is();
				chomp $text;
				$text=~s/\n//g;
				$text=~s/\r//g;
				#$content.=$text;
        my $octets  = encode('UTF-8', $text, Encode::FB_CROAK);
				$content.=$octets;
    }
		$content=~s/\n//g;

    open my $file, '>:encoding(UTF-8)', "$dir/main.html";
    print $file $content;
		close $file;
    return 1;

}

sub create_tree_from_uri {
    my $uri      = shift;
    my $uri_path = $uri->path();
    my $content =
      $uri->scheme
      ? get( $uri->as_iri() )
      : get( $base_url . $uri->as_iri() );
    $content or warn "no content : $uri";
    print STDERR 'create_tree_from_uri received arg : ' . $uri_path;
    $uri_path =~ m/(\/\w+){1,}/
      or die 'bad uri format';
    my ( $name, $path, $suffix ) = fileparse($uri_path);
    print Dumper $name, $path, $suffix;
    for my $directory ( $dir, "$dir$path" ) {
        if ( -d $directory ) {
            next;
        }
        make_path($directory) or die "make_path $directory : $!";
        print STDERR "created $directory";
    }
    my $full_path = $dir . $path . $name;
    open my $file, '>:encoding(UTF-8)', $full_path;
        print $file $content;
    close $file;
    print STDERR "created $full_path";
		system "iconv -f US-ASCII -t UTF-8 $full_path > $full_path.utf8"; 
#		rename ($full_path.".utf8",$full_path) or die "couldn't rename $full_path.utf8 to $full_path";
}
process();
