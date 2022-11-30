const express = require('express');
const router = express.Router();

const Alunos = require("../controllers/alunos.controller.js");



router.post("/create",Alunos.create);
router.get("/read",Alunos.readAll);
// router.put("/update",Alunos.update);
// router.delete("/del/:id",Alunos.del);

module.exports = router;