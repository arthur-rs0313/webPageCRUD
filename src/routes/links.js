const { response } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../databases')

router.get('/add',(req,res)=> {
    res.render('links/add')
});

router.post('/add', (req,res)=>{
    resp.send('recived');
});

module.exports = router;