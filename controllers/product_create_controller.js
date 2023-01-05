const ProductData = require('../models/Ecommerse_data_Schema');

// the present controller is used to create the  product

module.exports.create= async function(req,res){
    try{
        const result = await ProductData.create(req.body);
    
       // this is the response sending back;
       console.log(result);
        return res.status(200).send({
        
           "product":req.body
        
        
        });
    }catch(err){
        console.log('Error', err);
        return;
    }
}