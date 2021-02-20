const Text = require("../models/text");

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
  console.log(req);
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
