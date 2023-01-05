const ProductData = require('../models/Ecommerse_data_Schema');
// the below function is used to update the quantity and increment or decrement
module.exports.update= async function(req,res){
   try{

   const paramsString = req.url.split('?')[1];
    const eachParamArray = paramsString.split('&');
    let temp = false;
    let params = {};
    // the below function is used to converted url into key value pairs
   const params_data = await eachParamArray.forEach((param) => {
    const key = param.split('=')[0];
    const value = param.split('=')[1];
    Object.assign(params, {[key]: value});
    });
    var previouscount;
    console.log(params);
    // the below funtion used to find the producted by id
    const previousQty = await ProductData.findById(params.id);
    previouscount= parseInt(previousQty.quantity) + parseInt(params.number);
    console.log(previouscount);
        
        

    //  the below function is used to update the  quantity
    const updataQty = await ProductData.findByIdAndUpdate(params.id,{quantity:previouscount});
    
    const resposnse = await ProductData.findById(params.id);
        
        
        
    return res.status(200).send( {
        
        message: "updated successfully",
       "product":resposnse
            
            
    });

    }catch(err){
        console.log(err);

        return ;
    }

  
    
}