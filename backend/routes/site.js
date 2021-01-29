const express = require("express")
const checkAuth = require("../middelware/checkauth")
const router = express.Router();


router.get("/section", (req, res, next) =>{
  //devolvemos toda la info de la seccion
});

router.get("/course", (req, res, next) => {
  //devolvemos la info del curso con sus clases
});

router.post("unlockLesson", checkAuth, (req, res, next) => {
  //un usuario añade una nueva lección
});

module.exports = router;
