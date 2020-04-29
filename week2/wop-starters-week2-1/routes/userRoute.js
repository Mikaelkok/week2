'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/userController');

router.get('/', userController.cat_list_get);

router.get('/:id', userController.cat_get);

router.post('/', (req, res) =>{
    res.send('with this endpoint you can add cats');
});

router.put('/', (req, res) =>{
    res.send('with this endpoint you can add cats');
});

router.delete('/', (req, res) => {
    res.send('with this endpoint you can delete cats');
});