const AWS = require('aws-sdk');
const fs = require('fs');
//==============================================================
    const s3 = new AWS.S3({
      accessKeyId : '', 
      secretAccessKey : ''
    });
    //==============================================================
    const downloadFile = async (fileName) => {
      const params = {
        Bucket: "upload-img-test",
        Key: fileName
      };
      s3.getObject(params, (err,data) => {
        if(err) {console.log(err)}
        else{console.log(data.Body.toString())}
      });
    };
    //====================================================================
    (async () => {
      downloadFile('test.txt');
    })();