import * as express from "express";

const router = express.Router();

//home page.
router.get("/", function (req, res, next) {
  res.send("yes --- works ");
});

module.exports = router;
