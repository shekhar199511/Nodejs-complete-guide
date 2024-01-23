const path = require('path')

const express = require('express')

const router = express.Router()

const rootDir = require('../util/path')

const products = []

router.get('/add-product', (req, res, next)=>{
    res.render('add-product', {title: 'Add products', path: "Admin"})
})

router.post("/add-product", (req, res, next)=>{
    console.log("body", req.body)
    products.push({'title' : req.body.title})
    res.redirect('/')
})

exports.routes = router
exports.products = products