// Example Node.js AWS Polly Script
const AWS = require('aws-sdk')
const Stream = require('stream')
const Speaker = require('speaker')

AWS.config.loadFromPath('./awscreds.json');

const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
})

const Player = new Speaker({
  channels: 1,
  bitDepth: 16,
  sampleRate: 16000
})

let params = {
    'Text': '<speak>Hello, this is an example Node.js script which plays an audio stream converted by AWS Polly. <amazon:effect name="whispered"><prosody rate="slow">It is really cool.</prosody></amazon:effect></speak>',
    'TextType': "ssml", 
    'OutputFormat': 'pcm',
    'VoiceId': 'Amy'
}

Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
        console.log(err.message)
    } else if (data) {
        if (data.AudioStream instanceof Buffer) {
            var bufferStream = new Stream.PassThrough()
            bufferStream.end(data.AudioStream)
            bufferStream.pipe(Player)
        }
    }
})