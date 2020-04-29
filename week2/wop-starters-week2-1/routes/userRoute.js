'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/);
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', upload.single('user'), (req, res) =>{
	console.log('tiedosto: ', req.file);
	userController.user_post(req, res);
    //res.send('with this endpoint you can add users');
});

router.put('/', userController.user_put);

router.delete('/:id', userController.user_delete);

module.exports = router;