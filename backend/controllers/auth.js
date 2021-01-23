const { json } = require("body-parser");
const User = require("../models/user");

exports.createUser = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    mail: req.body.mail,
    password: req.body.password
  });
  user.save()
  .then(result =>
    {
      res.code(201).json({message: result})
    })
  .catch(error =>
    { res.status(500).json
      (
        {message : error}
      )
    });
}

