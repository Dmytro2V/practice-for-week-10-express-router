const express = require("express");
const router = express.Router();

// GET /colors - send a JSON of "GET /colors"
router.get('/', (req, res) => {
    res.json("GET /colors")
})

// GET /colors/:name - send a JSON of "GET /colors/:name"
router.get('/:name', (req, res) => {
    res.json("GET /colors/" + req.params.name)
})

module.exports = router;