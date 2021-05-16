var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "We are handling your get request !"
    })});



module.exports = router;