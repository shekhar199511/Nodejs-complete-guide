const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

const admin = require('./admin')


router.get("/", (req, res, next)=>{
   res.render('shop', {prods: admin.products, title: "Shop", path: "Shop"})
})

module.exports = router