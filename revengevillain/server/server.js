const express = require('express') 
const app = express();
const api = require('./routes/index');

app.use('/api',api);

const port = process.env.PORT || 3200;
app.listen(port, ()=>{
  console.log(`서버연결 성공 : http://localhost:${port}`);
})