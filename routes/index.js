const express = require('express');
const router = express.Router();
const homeController = require('../controllers/index');

// thew below function is used for  get the data 

router.get('/',function(req,res){
    return res.render('home');
});
// the below router is used to get the products
router.get('/products',homeController.products);

// router.use('/products',require('./product_creation_deletion'));


const productController = require('../controllers/product_create_controller');
const productdeletion = require('../controllers/product_deletion_controller');
const productUpdate = require('../controllers/product_update_controller');


// the below router is used to create the product
router.post('/products/create',productController.create);
// the below router is used to update the product quantity
router.post('/products/update',productUpdate.update);
// the below router is used to delete the product
router.delete('/products/delete',productdeletion.deletion);

module.exports = router;