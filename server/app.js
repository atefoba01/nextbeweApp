const express = require('express');
const cors = require('cors')
const app = express();
const routes = require('./routes/jobPosting')
const port = process.env.port || 6000;

require('./db');

app.use(express.json())
app.use(cors())
app.use('/api',routes)


app.listen(port,(err)=>{
  if(!err){
    console.log(`Server connected successfully and running on ${port}`)
  }
})


