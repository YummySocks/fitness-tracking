const router = require('express').Router();
const path = require('path');
const db = require("../models");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get("/api/workouts", (req, res) =>
  //   db.Workout.find({})
  db.Workout.aggregate([
    // { match: { _id: req.params.id } },
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalDistance: { $sum: "$exercises.distance" },
        totalSets: { $sum: "$exercises.sets" },
        totalReps: { $sum: "$exercises.reps" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err))
);

router.post("/api/workouts", (req, res) =>
  db.Workout.create({})
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err))
);

module.exports = router;