const express = require('express');
const router = express();

// http://localhost:3200/ 으로 접속 시 응답메시지 출력
router.get('/test', (req,res) => {
  res.send({ test : "리벤지 테스트!!"});
})

module.exports = router;