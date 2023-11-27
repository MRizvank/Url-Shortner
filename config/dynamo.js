require('dotenv').config({ path: '../.env' });
const AWS=require('aws-sdk');
AWS.config.update({
  region: 
  'ap-south-1',
  accessKeyId:process.env.aws_access_key_id,
  secretAccessKey:process.env.aws_secret_access_key
})
const dynamoClient=new AWS.DynamoDB.DocumentClient();
const TABLE_NAME="Links";

const getUrls=async()=>{
  const params={
    TableName:TABLE_NAME
  }  ;
  const urls=await dynamoClient.scan(params).promise();
  return urls;
}

const addOrUpdate=async(url)=>{
  const params={
    TableName:TABLE_NAME,
    Item:url
  }
 return  await dynamoClient.put(params).promise();
}
const getItemById=async(id)=>{
  const params={
    TableName:TABLE_NAME,
    Key:{
      id
    }
  }
  return await dynamoClient.get(params).promise();
}
const deleteItemById=async(id)=>{
  const params={
    TableName:TABLE_NAME,
    Key:{
      id,date
    }
  }
  return await dynamoClient.delete(params).promise();
}

const date=new Date().getDate();
const month=new Date().getMonth();
const year=new Date().getFullYear();
const CD=`${date}-${month}-${year}`;


// module.exports={
//   getUrls,
//   addOrUpdate,
//   getItemById,
//   deleteItemById
// }
module.exports={
  dynamoClient,TABLE_NAME
}