const router = require("express").Router();
const phonesJson = require("../db/phones.json")


router.get("/phones", (req, res) => {
    res.json(phonesJson);
  });


module.exports = router;
