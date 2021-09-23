// implement fetcher //

// import fs read/write here
const fs = require('fs');
// import request here
// const { request } = require('http');
// const https = require('https');
const request = require('request');
// take URL and local file path via process.argv[2] + argv[3]
const url = process.argv[2];
const file = process.argv[3];


request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const sizeOfFile = body.length; // size

  fs.writeFile(file, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
    console.log(`Downloaded and saved ${sizeOfFile} bytes to ${file}`);
  });
});

// console.log(data);
// download from URL to local directory
// return message which includes size of file and location
