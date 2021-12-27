const Product = require("../models/product.model");

module.exports = {
    createProduct: (req, res) => {
    Product.create(req.body)
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },    
    allProduct: (req, res) => {
    Product.find()
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },    
    oneProduct: (req, res) => {
    Product.findOne({ _id: req.params._id })
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },    
    updateProduct: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },

    deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },
};
