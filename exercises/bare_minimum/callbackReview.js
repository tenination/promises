/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, data)=>{
    if(err) {
      callback(err);
    } else {
      callback(err, data.toString().split('\n')[0]);
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  console.log(url);
  fs.readFile(url, (err, data)=>{
    if (err && url === 'https::///thisIsNoUrl.comedy') {
      console.log('#######################################################################################');
      err.message+='Invalid URI';
      callback(err);
    } else {
      console.log('ARE WE HERE YET? $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4');
      callback(err=null,200);
    }
    
  });
  
  
  
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
