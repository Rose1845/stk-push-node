const preAuthorizeMpesa = require("../middleware/preAuthorizeMpesa");

const router = require("express").Router();

router.get("/access-token", preAuthorizeMpesa, async (req, res, next) => {
  try {
    return res.status(200).json(req.mpesa);
  } catch (error) {
    return res.status(500).json(error.response.data ?? error.message);
  }
});
module.exports = router;
