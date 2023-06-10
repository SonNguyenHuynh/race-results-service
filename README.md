<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Download

-- nodejs version: 16.x
-- docker desktop: (https://docs.docker.com/desktop/install/windows-install/)
-- pgAdmin : (https://www.pgadmin.org/download/)

## Installation

```bash
$ npm install

```

start docker

```bash
$ docker-compose up -d

```

run migration

```bash
$ npm run migration:run

```

connect DB

```bash
$  host: 'localhost',
$  port: 5434,
$  username: 'postgres',
$  password: '123456',
$  database: 'postgres',

```

insert DB : import file sql in folder source into db

(data.sql)

## Running the app

```bash
# development
$ npm run start

```

## Test api

api
http://localhost:3000/people
http://localhost:3000/race
http://localhost:3000/rank
http://localhost:3000/team

get all people(driver)

```bash
$ http://localhost:3000/people

```

get people by Name

```bash
$ http://localhost:3000/people?name=Max Verstappen

```

get people by year

```bash
$ http://localhost:3000/people?year=2023

```

get people by name and year

```bash
$ http://localhost:3000/people?name=Max Verstappen&year=2023

```

get team by Name

```bash
$ http://localhost:3000/team?name=RED BULL RACING HONDA RBPT

```

get team by year

```bash
$ http://localhost:3000/team?year=2023

```

get team by year and race name

```bash
$ http://localhost:3000/rank?name=BAHRAIN&year=2023
```

other api follow as above

good luck

