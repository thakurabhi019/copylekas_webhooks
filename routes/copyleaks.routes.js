const express = require('express');
const router = express.Router();

router.post('/export/:export_id/results/:result_id',(req,res) => {
    console.log('export webhook called');
    const {export_id,result_id} = req.params;
    console.log({export_id,result_id});
    const body = req.body;
    console.log(JSON.stringify(body));
    res.send(`Webhook called for export_id: ${export_id} and result_id: ${result_id}`);
})

router.post('/copyleaks/:status/:scanId',(req,res) => {
    console.log('status webhook called')
    const {status,scanId} = req.params;
    console.log({status,scanId});
    const {results} = req.body;
    console.log(JSON.stringify(results));
    res.send(`Webhook called for scanId: ${scanId} and STATUS: ${status}`);
})

// pdf report
// "endpoint": "https://copylekas-webhooks.onrender.com/copyleaks/export/sitaram1234567/pdf-report"
router.post("/copyleaks/export/:export_id/pdf-report", (req, res) => {
    console.log("result pdf webhook called");
    // const { export_id, result_id } = req.params;
    // console.log({ export_id, result_id });
    const body = req.body;
    console.log(JSON.stringify(body));
    res.send(
      `Webhook called for export_id pdf`
    );
  });

module.exports = router
