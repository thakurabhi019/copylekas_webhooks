const express = require("express");
const router = express.Router();

router.post("/copyleaks/export/:export_id/:status", (req, res) => {
  console.log("export completed webhook called");
  const { export_id, status } = req.params;
  console.log({ export_id, status });
  const body = req.body;
  console.log(JSON.stringify(body));
  res.send(
    `Webhook called for export_id: ${export_id} and status: ${status}`
  );
});

router.post("/copyleaks/export/:export_id/results/:result_id", (req, res) => {
  console.log("result webhook called");
  const { export_id, result_id } = req.params;
  console.log({ export_id, result_id });
  const body = req.body;
  console.log(JSON.stringify(body));
  res.send(
    `Webhook called for export_id: ${export_id} and result_id: ${result_id}`
  );
});

router.post("/copyleaks/:status/:scanId", (req, res) => {
  console.log("status webhook called");
  const { status, scanId } = req.params;
  console.log({ status, scanId });
  const data = req.body;
  console.log(JSON.stringify(data));
  res.send(`Webhook called for scanId: ${scanId} and STATUS: ${status}`);
});

module.exports = router;
