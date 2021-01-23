const mongoose = require("mongoose");

const lessonSchema = mongoose.Schema({
  lessonName: [
    {
      lang: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  ],
  url: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Lesson", lessonSchema);
