// persons.route.js

const express = require('express');
const categroryRoutes = express.Router();

// Require Business model in our routes module
let Categrory = require('./categrorys.model');

// Defined store route
categroryRoutes.route('/add').post(function (req, res) {
    let categrory = new Categrory(req.body);
    categrory.save()
        .then(categrory => {
            res.status(200).json({'Categrory': 'categrory in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
categroryRoutes.route('/').get(function (req, res) {
    Categrory.find(function(err, categrorys){
        if(err){
            console.log(err);
        }
        else {
            res.json(categrorys);
        }
    });
});

// Defined edit route
categroryRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Categrory.findById(id, function (err, business){
        res.json(business);
    });
});

//  Defined update route
categroryRoutes.route('/update/:id').post(function (req, res) {
    Categrory.findById(req.params.id, function(err, categrory) {
        if (!categrory)
            res.status(404).send("data is not found");
        else {
            categrory.name = req.body.name;
            categrory.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
categroryRoutes.route('/delete/:id').get(function (req, res) {
    Categrory.findByIdAndRemove({_id: req.params.id}, function(err, person){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = categroryRoutes;