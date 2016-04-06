# wiznwit.com dockerfile
# VERSION 0.0.1

FROM wiznwit:magic

MAINTAINER Wizards & Witches <dev@wiznwit.com>
ENV REFRESHED_AT 2016-28-03

WORKDIR /srv

COPY package.json ./

ARG NODE_ENV

ENV NODE_ENV=production

ENV DIST_DIR=dist/
ENV SERVER_SRC_FILES=src/server
ENV CLIENT_SRC_FILES=src/client

RUN npm install --verbose --production

COPY src ./src/
COPY .babelrc ./

RUN ./build.sh

CMD ["node", "dist/index.js"]
