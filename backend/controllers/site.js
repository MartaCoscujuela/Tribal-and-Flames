const Text = require("../models/text");
const Img = require("../models/img");
const fs = require('fs');
const img = require("../models/img");
const { promise } = require("bcrypt/promises");



exports.postText = (req, res, next) => {
  const filter = { name: req.body.name };
  const update = { esp: req.body.esp, eng: req.body.eng };

  Text.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  }).then((result)=>{
    res.status(200).json(result);
  }).catch((err)=>{
    res.status(500).json(err);
  })
}

exports.getText = (req, res, next) => {
  Text.findOne({ name: req.params.name })
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Text not found!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

exports.getImg = (req, res, next) => {
  const ref = req.params.ref;
  Img.findOne({ref: ref})
  .then((result)=>{
    if (result){
      const img = {
        ref: result.ref,
        esp: result.esp,
        eng: result.eng
      }
      res.status(200).json(img);
    } else {
      res.status(404).json("Image not found")
    }
  }).catch((err)=>{
    console.log(err);
    res.status(500).json(err)
  })
}

const getPaths = (req) =>{

  const paths = {eng: '', esp: '', localEng: '', localEsp: ''};
  const url = req.protocol + '://' + req.get("host");

  if (req.files.esp )  {
    const url = req.protocol + '://' + req.get("host")
    paths.localEsp = req.files.esp[0].path
    paths.esp = url+'/images/'+req.files.esp[0].filename
  }

  if (req.files.eng )  {
    const url = req.protocol + '://' + req.get("host")
    paths.localEng =  req.files.eng[0].path
    paths.eng = url+'/images/'+req.files.eng[0].filename
  }

  return paths;
}

const newImage = (req, res) =>{
  const paths = getPaths(req);
  const ref = req.body.ref

  const img = new Img({
    ref: ref,
    esp: paths.esp,
    eng: paths.eng,
    localEsp: paths.localEsp,
    localEng: paths.localEng
  })

  Img.create(img)
  .then(createdImg=>{

    return res.status(201).json(createdImg);
  })
  .catch(err => {
    return res.status(500).json(err)
  });

}

const updateImage = (req, res, img) => {
  let oldEsp
  let oldEng
  const paths = getPaths(req);
  const ref = req.body.ref
  oldEsp = img.localEsp
  oldEng = img.localEng

  return Promise.resolve()
  .then(()=>{
    console.log('first');
    if (paths.localEsp){
      return fs.promises.unlink(oldEsp)
    } else {
      return Promise.resolve('forced')
    }
  }).then((result)=>{
    console.log('second');
    console.log(result);
    if (result !== 'forced'){
      console.log('borra esp');
      img.esp = paths.esp
      img.localEsp = paths.localEsp
    }
    if (paths.localEng){
      console.log('entra a local eng');
      return fs.promises.unlink(oldEng)
    } else {
      return Promise.resolve('forced')
      console.log('no entra a local eng');

    }
  }).then(result =>{
    console.log('third');
    console.log(paths.localEng);

    console.log(result);
    if (result !== 'forced'){
      console.log('borra ingles');
      img.eng = paths.eng
      img.localEng = paths.localEng
    }
    return Img.updateOne({ref: ref}, img)
  }).then((result)=>{
    console.log(img);
    res.status(201).json(img)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })

}

exports.postImg = (req, res, next) =>{

  if (!req.files){
    Img.findOne({ref: req.body.ref})
    .then(result => {
      console.log(result);
      if (result){
        res.status(200).json(result)
      } else {
        res.status(500).json("No se encontraron archivos")
      }
    });
    return
  }

  const ref = req.body.ref
  Img.findOne({ref : ref}).then(img => {
    if (img){
      updateImage(req, res, img);
    } else {
      newImage(req, res)
    }
  })
}


/*
   Img.findOne({name : name}, {new: true, upsert: true})
  .then(result => {
    img = result
    oldEsp = img.esp
    oldEng = img.eng
    return fs.unlink(oldEsp)
  }).then(result =>{
    img.esp = newEsp
    return fs.unlink(oldEng)
  }).then(result => {
    img.eng = newEng
  }).catch((err) => {
    res.status(500).json(err)
  });
*/

/*  let esp_url = req.body.esp;
  let eng_url = req.body.eng;

  if (req.file )  {
    const url = req.protocol + '://' + req.get("host");
    imagePath = url +  "/images/" + req.file.filename;
  }

  const filter = { name: req.body.name };
  const update = { esp: req.body.esp, eng: req.body.eng };

  Img.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  }).then((result)=>{
    res.status(200).json(result);
  }).catch((err)=>{
    res.status(500).json(err);
  })*/



