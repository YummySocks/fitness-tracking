const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      type: {
        type: String
      },
      weights: {
        type: Number
      },
      duration: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
  });

  const Workout = mongoose.model("Workout", workoutSchema);

module.exports = {Workout};