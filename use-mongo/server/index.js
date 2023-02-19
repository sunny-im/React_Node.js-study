const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
require('dotenv').config();

const MONGO_ID = process.env.MONGO_ID;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

const connect = () => {
  mongoose.connect(MONGO_URL, {
    dbName: 'firstMongo',
  }, (error)=>{
    if(error) {
      console.log('몽고디비 연결 에러', error);
    } else {
      console.log('몽고디비 연결 성공');
    }
  });
};

connect();
