const express = require('express');
const router = express.Router();

router.post('/copyleaks/:status/:scanId',(req,res) => {
    const {status,scanId} = req.params;
    console.log({status,scanId});
    const body = req.body;
    console.log(body);
    res.send(`Webhook called for scanId: ${scanId} and STATUS: ${status}`);
})

module.exports = router
