const ProductData = require('../models/Ecommerse_data_Schema');

// the present surrver is used to deletion 
module.exports.deletion= async function(req,res){
    try{
      //    the below funtion is used to findthe product by id and delete
       const product = await ProductData.findByIdAndDelete(req.body.id);
        
        return res.status(200).send( {
        
            message: "product deleted"
                    
                    
        });
    
    }catch(err){
        console.log(err);
        return;

    } 
            
 
    
}