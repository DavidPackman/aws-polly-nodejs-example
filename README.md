# AWS Polly Example Using Node.js and SSML
Example Noda.js script thats uses AWS Polly to convert a string to audo and streams the result back to the app to be played.

## Requirements
Requires [AWS SDK for JavaScript](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html).

Requires [Node-Speaker](https://github.com/TooTallNate/node-speaker).

## Basic Configuration
You will need to modify the awscreds.json file to include your AWS security credentials.  The IAM user must have access to Polly.

The following lines will need modification.

```
{
 "accessKeyId": "Your Access Key",
 "secretAccessKey": "Your Secret Key"
}
```

## Running the example
From the command line run the following:

```
node aws-polly-example.js   
```