# Application Dependencies

## Udagram API Backend

- AWS RDS Postgres database instance
- AWS Elastic Beanstalk environment
- AWS Elastic Beanstalk CLI v3.20.2

```
{
  "name": "udagram-api",
  "version": "2.0.0",
  "description": "",
  "scripts": {
    "start": "node ./www/server.js",
    "tsc": "tsc",
    "dev": "ts-node-dev --respawn --transpileOnly ./src/server.ts",
    "prod": "tsc && node ./www/server.js",
    "clean": "rm -rf www/ || true",
    "build": "npm run clean && tsc && cp -rf src/config www/config && cp .npmrc www/.npmrc && cp package.json www/package.json",
    "deploy": "eb deploy"
  },
  "keywords": [],
  "author": "Aml",
  "license": "ISC",
  "dependencies": {
    "@types/bcrypt": "^3.0.0",
    "@types/jsonwebtoken": "^8.3.2",
    "aws-sdk": "^2.429.0",
    "bcrypt": "^5.0.1",
    "body-parser": "^1.18.3",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "email-validator": "^2.0.4",
    "express": "^4.16.4",
    "jsonwebtoken": "^8.5.1",
    "nodemon": "^2.0.16",
    "pg": "^8.7.1",
    "reflect-metadata": "^0.1.13",
    "sequelize": "^5.21.4",
    "sequelize-typescript": "^0.6.9",
    "ts-node": "^10.7.0"
  },
  "devDependencies": {
    "@types/bluebird": "^3.5.26",
    "@types/cors": "^2.8.6",
    "@types/express": "^4.16.1",
    "@types/node": "^11.11.6",
    "@types/sequelize": "^4.27.44",
    "@types/validator": "^10.9.0",
    "@typescript-eslint/eslint-plugin": "^2.19.2",
    "@typescript-eslint/parser": "^2.19.2",
    "chai": "^4.2.0",
    "chai-http": "^4.2.1",
    "eslint": "^6.8.0",
    "eslint-config-google": "^0.14.0",
    "mocha": "^6.1.4",
    "ts-node-dev": "^1.0.0-pre.32",
    "typescript": "^3.3.4000"
  }
}


```

## Udagram UI Front-end

- AWS CLI v2.3.1
- AWS Simple Storage Service bucket

```
{
  "name": "udagram-frontend",
  "version": "0.0.1",
  "author": "Ionic Framework",
  "homepage": "https://ionicframework.com/",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "deploy": "chmod +x bin/deploy.sh && bin/deploy.sh"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^8.2.14",
    "@angular/core": "^8.2.14",
    "@angular/forms": "^8.2.14",
    "@angular/http": "^7.2.16",
    "@angular/platform-browser": "^8.2.14",
    "@angular/platform-browser-dynamic": "^8.2.14",
    "@angular/router": "^8.2.14",
    "@ionic-native/core": "^5.0.0",
    "@ionic-native/splash-screen": "^5.0.0",
    "@ionic-native/status-bar": "^5.0.0",
    "@ionic/angular": "^4.1.0",
    "core-js": "^2.5.4",
    "rxjs": "~6.5.4",
    "zone.js": "~0.9.1"
  },
  "devDependencies": {
    "@angular-devkit/architect": "~0.12.3",
    "@angular-devkit/build-angular": "^0.803.24",
    "@angular-devkit/core": "~7.2.3",
    "@angular-devkit/schematics": "~7.2.3",
    "@angular/cli": "~8.3.25",
    "@angular/compiler": "~8.2.14",
    "@angular/compiler-cli": "~8.2.14",
    "@angular/language-service": "~8.2.14",
    "@ionic/angular-toolkit": "~1.4.0",
    "@types/jasmine": "~2.8.8",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~10.12.0",
    "@typescript-eslint/eslint-plugin": "^2.20.0",
    "@typescript-eslint/parser": "^2.20.0",
    "codelyzer": "~4.5.0",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~3.1.4",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.4.0",
    "ts-node": "~8.0.0",
    "tslint": "~5.12.0",
    "typescript": "^3.5.3"
  },
  "description": "An Ionic project"
}


```
