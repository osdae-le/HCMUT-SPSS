## Description

IELTS Platform API repository built with [Nest](https://github.com/nestjs/nest) Framework

## Tech Stacks

- NestJS
- NodeJS
- Express
- Typescript
- TypeORM
- Jest
- Docker
- Eslint
- Prettier
- Swagger
- PostgreSQL

## Prerequisites

- nodejs 18
- postgres:14
- docker
- docker-compose
- npm

## Installation

```bash
$ npm install
```

## Settting up the environment variables

- Copy the file `.env.example` and make the new file `.env`
- Insert the values for the variables in the `.env` file

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running with docker-compose (need to have docker and docker-compose installed)

```bash
# development
$ docker-compose up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger API Documentation

Go to `${BaseURL}/api` to view all the API documentations
