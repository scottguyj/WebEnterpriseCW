var express = require('express');
const app = express();
var router = express.Router();

let Product = require('../models/product');

// Get All Products
router.route('/products').get((req, res) =>{
    Product.find((err, products) =>{
        if(err){
            return next(err);
        } else {
        res.json(products);
        }
    });
});

// Get One product
router.route('/product/:id').get((req, res) => {
    Product.findById(req.params.id, (err, product) =>{
        if(err){
            return next(err);
        }
        res.json(product);
        console.log('Data Added Successfully')
    });
});

//Update room
router.route('/product/:id').put((req, res, next) =>{
    Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, product) => {
        if(err){
            return next(err);
            console.log(err);
        } else{
            res.json(product)
            console.log('Data updated successfully')
        }
    });
});

router.route('/product').post((req, res, next) => {
    Product.create(req.body, (err, product) => {
      if (err) {
        return next(err)
      } else {
        res.json(product)
      }
    })
  });

  router.route('/product/:id').delete((req, res, next) => {
    Product.findOneAndRemove(req.params.id, (err, product) => {
      if (error) {
        return next(err);
        console.log('Here')
      } else {
        res.status(200).json({
          msg: product
        })
      }
    })
  })


module.exports = router