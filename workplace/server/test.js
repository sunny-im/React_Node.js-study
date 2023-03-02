const AWS = require('aws-sdk');
const ExcelJS = require('exceljs');
const excelColumns  = require('./data.js');
//==============================================================
const CURR_DATE = new Date();
const UTC = CURR_DATE.getTime() + (CURR_DATE.getTimezoneOffset() * 60 * 1000);
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const KR_CURR_DATE = new Date(UTC + KR_TIME_DIFF);
const year = KR_CURR_DATE.getFullYear();
const month = KR_CURR_DATE.getMonth()+1;
const date = KR_CURR_DATE.getDate();
const hour = KR_CURR_DATE.getHours();
const minute = KR_CURR_DATE.getMinutes();
const excelDate = `${year}-${month}-${date} ${hour}:${minute}`;
//==============================================================

let excelData = [];
    excelData.push({
      naverBizmoney : '345,234',
      kakaoKeyword : '142,355',
      googleSearch : '23,536',
      googleDisplay : '123,345',
      facebook : '123,346,567',
      naverDB : 10,
      daumDB : 20,
      googleDB : 30,
      newDB : 40,
      brandDB : 50,
      hompageDB : 40,
      viralDB : 30,
      gdnDB : 1,
      facebookDB : 299,
      kakaomomentDB : 39,
      bandDB : 2,
      _gdnDB : 4,
      _facebookDB : 66,
      _kakaomomentDB : 44,
      _bandDB : 0
    });
    //==============================================================
    const s3 = new AWS.S3({
      accessKeyId : 'AKIASP2ACU3DV5UCVO7L', 
      secretAccessKey : '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'
    });
    //==============================================================
    const uploadExcel = async (workbook, fileKey) => {
      const buffer = await workbook.xlsx.writeBuffer();
      const params = {
        Bucket: 'upload-img-test',
        Key: fileKey,
        Body: buffer,
      };
      s3.upload(params, (err,data) => {
        if(err) {throw err;}
        console.log(`success : ${data.Location}`)
      })
    };
    const downloadURL = s3.getSignedUrl('getObject', {
      Bucket: 'upload-img-test',
      Key: `TM_report_${excelDate}.xlsx`,
    })
    console.log("downloadURL",downloadURL)
    //==============================================================
      const getExcel = async (result, columns) => {
      //==============================================================
      const fileKey = `TM_report_${excelDate}.xlsx`;
      let workbook = new ExcelJS.Workbook();
      let worksheet = workbook.addWorksheet('장기TM리포트');
      //==============================================================
      worksheet.columns = columns;
      worksheet.addRows(result);
      //==============================================================
      uploadExcel(workbook, fileKey);          
    };
    //====================================================================
    (async () => {
      getExcel(excelData,excelColumns);
    })();