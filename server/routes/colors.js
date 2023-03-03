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

// -------------- Bonus Practice ------------

// POST /colors/:name/css-styles - send a JSON of "POST /colors/:name/css-styles"
router.post('/:name/css-styles', (req, res) => {
    res.json("POST /colors/" + req.params.name + "/css-styles")
})

// DELETE /colors/:name/css-styles/:style - send a JSON of "DELETE /colors/:name/css-styles/:style"
router.delete('/:name/css-styles/:style', (req, res) => {
    res.json("DELETE /colors/" + req.params.name + "/css-styles/" + req.params.style )
})


module.exports = router;