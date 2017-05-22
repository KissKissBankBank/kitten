FROM ruby:2.3.3
MAINTAINER Morad Igmir morad.igmir@kisskissbankbank.com

# Throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

# Update system 
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y curl git automake libtool build-essential nodejs perl libwww-perl libnet-http-perl liburi-perl libfile-touch-perl libfile-path-perl libhtml-tokeparser-simple-perl libtemplate-perl liblog-log4perl-perl libconfig-general-perl

# install app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN bin/install
RUN npm rebuild node-sass
# modify client package.json for docker path modification
RUN perl -pi.bak -e "s/(\.\.\/)/\/usr\/src\/app\//g" spec/dummy/client/package.json

# run
WORKDIR /usr/src/app
CMD ["bin/docker_start"]
