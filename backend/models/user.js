const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = Schema({

  username: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true,
    unique: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true
  },
  lessons: [
    {
      lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
        required: true
      },
      isFinished: {
        type: Boolean,
        default: false
      },
      secondsWatched: {
        type: Number,
        default: 0
      }
    }
  ]
});


module.exports = mongoose.model('User', userSchema);
