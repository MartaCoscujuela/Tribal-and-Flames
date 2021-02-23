const express = require("express")
const checkAuth = require("../middelware/checkauth")
const router = express.Router();
const siteController = require("../controllers/site");
const extractFile = require("../middelware/file")

router.get("/section", (req, res, next) =>{
  //devolvemos toda la info de la seccion
});

router.get("/text/:name", siteController.getText);

router.post("/text", siteController.postText);

router.get("/img/:ref", siteController.getImg);

router.post("/img",extractFile, siteController.postImg);


router.get("/course", (req, res, next) => {
  //devolvemos la info del curso con sus clases
});

router.post("unlockLesson", checkAuth, (req, res, next) => {
  //un usuario añade una nueva lección
});

module.exports = router;
