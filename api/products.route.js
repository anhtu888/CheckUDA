// persons.route.js

const express = require('express');
const productRoutes = express.Router();

// Require Business model in our routes module
let Product = require('./products.model');

// Defined store route
productRoutes.route('/add').post(function (req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'Product': 'Product in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
productRoutes.route('/').get(function (req, res) {
    Product.find(function(err, products){
        if(err){
            console.log(err);
        }
        else {
            res.json(products);
        }
    });
});

// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, business){
        res.json(business);
    });
});

//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else {
            console.log(product);
            product.tenSanPham = req.body.tenSanPham;
            product.giaCa = req.body.giaCa;
            product.nguoiChamSoc = req.body.nguoiChamSoc;
            product.nguoiBanSp = req.body.nguoiBanSp;
            product.baoQuan = req.body.baoQuan;
            product.noiTrong = req.body.noiTrong;
            product.ngayGieoTrong = req.body.ngayGieoTrong;
            product.ngayThuHoach = req.body.ngayThuHoach;
            product.donVi = req.body.donVi;
            product.hinhAnh = req.body.hinhAnh;

            product.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, person){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;