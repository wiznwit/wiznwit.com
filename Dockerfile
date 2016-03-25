# wizardsatwork/grundstein/postgres dockerfile
# VERSION 0.0.1

FROM mhart/alpine-node:5.9.1

MAINTAINER Wizards & Witches <dev@wiznwit.com>
ENV REFRESHED_AT 2016-25-03

RUN apk add --no-cache git

WORKDIR /srv

COPY out/ .

COPY package.json .

ARG NODE_ENV
ARG CACHEBUST

RUN npm install

CMD ["node", "index.js"]
