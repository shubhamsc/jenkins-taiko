# Automate Jenkins pipeline build with Taiko

## Steps to run script

### npm install

Run `npm install` to install all dependencies

### Setup .env file

Replace these placeholders with actual values

```.env
USERNAME={{USERNAME}}
PASSWORD={{PASSWORD}}
PIPELINE_NAME={{PIPELINE_NAME}}
JENKINS_URL={{JENKINS_URL}}
```

### Add repository and branch name in pipelineConfig

```json
{
    "GIT_CONFIG_BRANCH":"master",
    "GIT_MODULE_BRANCH":"master"
}
```

### Run script

`npm start`
