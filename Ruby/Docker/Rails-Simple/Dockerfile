FROM ruby:2.7.1

RUN apt-get update -qq && apt-get install -y build-essential nodejs

RUN mkdir /app
RUN mkdir /scripts
WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle check || bundle install

COPY . /app
