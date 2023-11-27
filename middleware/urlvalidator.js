const isUrlValid = require('url-validation');
const validator=(req,res,next)=>{
    const {url}=req.body;
    const validity=isUrlValid(url)
    if(validity){
        next()
    }else{
        res.staus(400).send({"message":"please provide a valid url "})
    }

    
}
module.exports={validator}