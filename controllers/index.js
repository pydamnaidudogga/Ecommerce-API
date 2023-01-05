const db=require('../config/mongoose');

const productData = require('../models/Ecommerse_data_Schema');
module.exports.products= async function(req,res){
    try{
        const result = await productData.find({});
        console.log(result);
    
        return res.status(200).send({
        
           "products": result
        });

    }catch(err){
      console.log('Error', err);
      return;
   }
    
}