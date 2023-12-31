const express = require("express");
const {dynamoClient,TABLE_NAME}=require('./config/dynamo')
const {ulrRoutes}=require('./routes/urlRoutes')
require("dotenv").config();
const cors=require('cors')
const PORT = process.env.PORT || 3000;
const app=express()
app.use(cors())
app.use(express.json())
app.use('/url',ulrRoutes)


app.get('/',(req,res)=>{
  res.send('<h1>server is running success fully</h1>')
})
app.get('/all',async(req,res)=>{
  const params={
    TableName:TABLE_NAME
  }  ;
  const urls=await dynamoClient.scan(params).promise();
  res.json(urls)
})

app.get('/:id',async(req,res)=>{
  const id=req.params.id
  try {
    const params={
      TableName:TABLE_NAME,
      Key:{
        id
      }
    }
    let data=await dynamoClient.get(params).promise();
  res.redirect(data.Item.url)
  } catch (error) {
    console.log(error);
    res.send({"message":'oops something went wrong'});
  }
})

app.listen(()=>{
  console.log(`server is running at`);
})

