const {dynamoClient,TABLE_NAME}=require('../config/dynamo')
const {validator}=require('../middleware/urlvalidator')
const {generateRandomId}=require('../middleware/idgen')

const express=require('express')
const ulrRoutes=express.Router()

ulrRoutes.post('/addurl',validator,async(req,res)=>{
    const {url}=req.body;
    const id=generateRandomId(10)
    try {
        const params={
            TableName:TABLE_NAME,
            Item:{
                id,url
            }
          }
            await dynamoClient.put(params).promise();
           res.send({"message":"link shortned  successfully",
           "shortUrl":`https://talented-shift-deer.cyclic.app/${id}`
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('oops something went wrong!...')
    }
})
module.exports={ulrRoutes}