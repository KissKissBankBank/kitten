FROM ruby:2.3.3
#FROM bsartek/kitten:current
#FROM bsartek/kitten:withnpm
#FROM bsartek/kitten:prenpmrun
MAINTAINER Morad Igmir morad.igmir@kisskissbankbank.com

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

# update system 
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y build-essential perl libwww-perl libnet-http-perl liburi-perl libfile-touch-perl libfile-path-perl libhtml-tokeparser-simple-perl nodejs

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN bin/install
WORKDIR /usr/src/app/spec/dummy
CMD ["bin/start"]
