FROM ruby:2.5.3-alpine3.8

RUN gem install bundler

RUN mkdir /app
COPY Gemfile* /app/
WORKDIR /app
RUN bundle