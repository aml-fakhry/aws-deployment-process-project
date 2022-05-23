# Hosting a Full-Stack Application

[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://app.circleci.com/pipelines/github/aml-fakhry/aws-deployment-process-project/12/workflows/d96c4a51-383c-49db-b110-996a3178dbe0)

[![AMS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://review.udacity.com/#!/reviews/3521870)

### **udagram is a full stack web application hosted on Amazon Web Services and is the final project under Udacity's Full Stack JavaScript Developer Nanodegree Program.**

---

## Udacity review

- Udacity review about this project

  ![alt text](screenshots/rev.png 'Udacity review')

---

## Hosted links

- Front-end link (UI)
  http://aml-udagram-frontend.s3-website-us-east-1.amazonaws.com

- Back-end link (API) http://udagram-api-app-dev.us-east-1.elasticbeanstalk.com

---

# Amazon Web Services

### AWS Simple Storage Service (S3)

- s3 image

  ![alt text](screenshots/5.buckets-files.png 'AWS S3')

### AWS Elastic Beanstalk (EB)

- check

  ![alt text](screenshots/1-eb-check.png 'AWS EB')

- Ok

  ![alt text](screenshots/2.recent-event.png 'AWS EB')

- Elastic Beanstalk configuration

  ![alt text](screenshots/10.enviroment-variables.png 'Elastic Beanstalk configuration')

### AWS Relational Database Service (RDS)

![alt text](screenshots/6.RDS.png 'AWS RDS')

---

## CircleCI

`This full stack web application is deployed with a CircleCI continuous integration pipeline.`

**Pipeline Highlights**:

1. Able to run install and build for both backend and front-end applications
2. Able to deploy for both backend and front-end applications

![alt text](screenshots/7.all-piplines.png 'CircleCI')

- All the secrets found in the application are configured inside CircleCi and passed to the production application.

![alt text](screenshots/9.workflow-circle-cli.png 'CircleCI workflow')

- screenshot of the CricleCi secrets

![alt text](screenshots/app-circleci-settings-project-github-aml-fakhry-aws-deployment-process-project-environment-variablals.png 'CircleCI secrets configuration')

---

## Documentation

Documentation about the architecture, infrastructure description, app dependencies, and the pipeline process are found inside the [docs](https://github.com/aml-fakhry/aws-deployment-process-project/tree/master/docs) folder.

---
