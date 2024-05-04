// const admin = require("firebase-admin");
//
// const serviceAccount = require("../service-account-1.json");
//
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
//
// const db = admin.firestore();
// // db.settings({
// //   host: "localhost:8080",
// //   ssl: false,
// // });
//
// /**
//  * Function to populate Firestore with activity levels
//  * @return {void}
//  */
// // async function populateExercises() {
// //   const exercises = [
// //     {
// //       workout_id: "workout1",
// //       exercise_id: "sq1",
// //       name: "Squats",
// //       image_url: "[path/to/squat_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 10, rest_duration: 60},
// //         {set_number: 2, reps: 10, rest_duration: 60},
// //         {set_number: 3, reps: 10, rest_duration: 60},
// //       ],
// //     },
// //     {
// //       workout_id: "workout1",
// //       exercise_id: "pu1",
// //       name: "Push-Ups",
// //       image_url: "[path/to/push_ups_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 8, rest_duration: 45},
// //         {set_number: 2, reps: 8, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout1",
// //       exercise_id: "pl1",
// //       name: "Plank",
// //       image_url: "[path/to/plank_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 30, rest_duration: 30},
// //         {set_number: 2, duration: 30, rest_duration: 30},
// //       ],
// //     },
// //     {
// //       workout_id: "workout1",
// //       exercise_id: "jj1",
// //       name: "Jumping Jacks",
// //       image_url: "[path/to/jumping_jacks_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 60, rest_duration: 30},
// //         {set_number: 2, duration: 60, rest_duration: 30},
// //       ],
// //     },
// //     // Add more exercises for other workouts here
// //   ];
// //
// //   // eslint-disable-next-line guard-for-in
// //   for (const exercise of exercises) {
// //     const exerciseRef = db.collection("exercises").doc(exercise.exercise_id);
// //     await exerciseRef.set(exercise);
// //     console.log(`Exercise ${exercise.name} added to Firestore`);
// //   }
// // }
// //
// // /**
// //  * Function to populate Firestore with activity levels and user objects
// //  * @return {void}
// //  */
// // async function populateWorkouts() {
// //   const workouts = [
// //     {workout_id: "workout1", title: "Full Body Beginner", level: "Beginner"},
// //     {workout_id: "workout2", title: "Upper Body Focus",
// //     level: "Intermediate"},
// //     {workout_id: "workout3", title: "Leg and Core Strength",
// //       level: "Intermediate"},
// //     {workout_id: "workout4", title: "Full Body Intermediate",
// //       level: "Intermediate"},
// //     {workout_id: "workout5", title: "Cardio and Core",
// //     level: "Intermediate"},
// //     {workout_id: "workout6", title: "Lower Body Blast",
// //     level: "Intermediate"},
// //     {workout_id: "workout7", title: "Arm Strength", level: "Intermediate"},
// //     {workout_id: "workout8", title: "Full Body Advanced", level: "Advanced"},
// //   ];
// //
// //   for (const workout of workouts) {
// //     const workoutRef = db.collection("workouts").doc(workout.workout_id);
// //     await workoutRef.set({
// //       title: workout.title,
// //       level: workout.level,
// //     });
// //     console.log(`Workout ${workout.title} added to Firestore`);
// //   }
// // }
// // // populateWorkouts().catch(console.error);
// //
// //
// // /**
// //  * Function to populate Firestore with activity levels and user objects
// //  * @return {void}
// //  */
// // async function populateData() {
// //   await populateExercises();
// // }
// //
// //
// // populateData();
//
// /**
//  * Function to populate Firestore with activity levels
//  * @return {void}
//  */
// // async function populateWorkout1Exercises() {
// //   // Define the exercises for Workout 1
// //   const exercises = [
// //     {
// //       workout_id: "workout1",
// //       exercise_id: "squats1",
// //       name: "Squats",
// //       image_url: "[path/to/squat_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 10, rest_duration: 60},
// //         {set_number: 2, reps: 10, rest_duration: 60},
// //         {set_number: 3, reps: 10, rest_duration: 60},
// //       ],
// //     },
// //     {
// //       workout_id: "workout1",
// //       exercise_id: "pushups1",
// //       name: "Push-Ups",
// //       image_url: "[path/to/push_ups_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 8, rest_duration: 45},
// //         {set_number: 2, reps: 8, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout1",
// //       exercise_id: "plank1",
// //       name: "Plank",
// //       image_url: "[path/to/plank_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 30, rest_duration: 30},
// //         {set_number: 2, duration: 30, rest_duration: 30},
// //       ],
// //     },
// //     {
// //       workout_id: "workout1",
// //       exercise_id: "jumpingjacks1",
// //       name: "Jumping Jacks",
// //       image_url: "[path/to/jumping_jacks_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 60, rest_duration: 30},
// //         {set_number: 2, duration: 60, rest_duration: 30},
// //       ],
// //     },
// //   ];
// //
// //   // Adding each exercise as a subdocument under the specific workout document
// //   for (const exercise of exercises) {
// //     const workoutRef = db.collection("workouts").doc(exercise.workout_id);
// //     const exerciseRef = workoutRef.collection("exercises")
// //         .doc(exercise.exercise_id);
// //     await exerciseRef.set({
// //       name: exercise.name,
// //       image_url: exercise.image_url,
// //       sets: exercise.sets,
// //     });
// //     console.log(`Exercise ${exercise.name} added under Workout 1 in Firestore`);
// //   }
// // }
// //
// // // Call the function to populate exercises for Workout 1
// // populateWorkout1Exercises().catch(console.error);
//
// // async function populateWorkout2Exercises() {
// //   // Define the exercises for Workout 2
// //   const exercises = [
// //     {
// //       workout_id: "workout2",
// //       exercise_id: "benchpress",
// //       name: "Bench Press",
// //       image_url: "[path/to/bench_press_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 8, rest_duration: 60},
// //         {set_number: 2, reps: 8, rest_duration: 60},
// //         {set_number: 3, reps: 8, rest_duration: 60},
// //       ],
// //     },
// //     {
// //       workout_id: "workout2",
// //       exercise_id: "bicepcurls",
// //       name: "Bicep Curls",
// //       image_url: "[path/to/bicep_curls_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 10, rest_duration: 45},
// //         {set_number: 2, reps: 10, rest_duration: 45},
// //         {set_number: 3, reps: 10, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout2",
// //       exercise_id: "tricepdips",
// //       name: "Tricep Dips",
// //       image_url: "[path/to/tricep_dips_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 10, rest_duration: 45},
// //         {set_number: 2, reps: 10, rest_duration: 45},
// //         {set_number: 3, reps: 10, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout2",
// //       exercise_id: "pushups",
// //       name: "Push-Ups",
// //       image_url: "[path/to/push_ups_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 12, rest_duration: 30},
// //         {set_number: 2, reps: 12, rest_duration: 30},
// //         {set_number: 3, reps: 12, rest_duration: 30},
// //       ],
// //     },
// //   ];
// //
// //   // Adding each exercise as a subdocument under the specific workout document
// //   for (const exercise of exercises) {
// //     const workoutRef = db.collection("workouts").doc(exercise.workout_id);
// //     const exerciseRef = workoutRef.collection("exercises").doc(exercise.exercise_id);
// //     await exerciseRef.set({
// //       name: exercise.name,
// //       image_url: exercise.image_url,
// //       sets: exercise.sets,
// //     });
// //     console.log(`Exercise ${exercise.name} added under Workout 2 in Firestore`);
// //   }
// // }
// //
// // // Call the function to populate exercises for Workout 2
// // populateWorkout2Exercises().catch(console.error);
// // async function populateWorkout3Exercises() {
// //   // Define the exercises for Workout 3
// //   const exercises = [
// //     {
// //       workout_id: "workout3",
// //       exercise_id: "lunges",
// //       name: "Lunges",
// //       image_url: "[path/to/lunges_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 10, rest_duration: 60},
// //         {set_number: 2, reps: 10, rest_duration: 60},
// //         {set_number: 3, reps: 10, rest_duration: 60},
// //       ],
// //     },
// //     {
// //       workout_id: "workout3",
// //       exercise_id: "squats",
// //       name: "Squats",
// //       image_url: "[path/to/squats_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 12, rest_duration: 60},
// //         {set_number: 2, reps: 12, rest_duration: 60},
// //         {set_number: 3, reps: 12, rest_duration: 60},
// //       ],
// //     },
// //     {
// //       workout_id: "workout3",
// //       exercise_id: "legraises",
// //       name: "Leg Raises",
// //       image_url: "[path/to/leg_raises_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 15, rest_duration: 45},
// //         {set_number: 2, reps: 15, rest_duration: 45},
// //         {set_number: 3, reps: 15, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout3",
// //       exercise_id: "plank",
// //       name: "Plank",
// //       image_url: "[path/to/plank_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 40, rest_duration: 30},
// //         {set_number: 2, duration: 40, rest_duration: 30},
// //         {set_number: 3, duration: 40, rest_duration: 30},
// //       ],
// //     },
// //   ];
// //
// //   // Adding each exercise as a subdocument under the specific workout document
// //   for (const exercise of exercises) {
// //     const workoutRef = db.collection("workouts").doc(exercise.workout_id);
// //     const exerciseRef = workoutRef.collection("exercises").doc(exercise.exercise_id);
// //     await exerciseRef.set({
// //       name: exercise.name,
// //       image_url: exercise.image_url,
// //       sets: exercise.sets,
// //     });
// //     console.log(`Exercise ${exercise.name} added under Workout 3 in Firestore`);
// //   }
// // }
// //
// // // Call the function to populate exercises for Workout 3
// // populateWorkout3Exercises().catch(console.error);
//
// // async function populateWorkout4Exercises() {
// //   // Define the exercises for Workout 4
// //   const exercises = [
// //     {
// //       workout_id: "workout4",
// //       exercise_id: "deadlifts4",
// //       name: "Deadlifts",
// //       image_url: "[path/to/deadlifts_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 8, rest_duration: 60},
// //         {set_number: 2, reps: 8, rest_duration: 60},
// //         {set_number: 3, reps: 8, rest_duration: 60},
// //       ],
// //     },
// //     {
// //       workout_id: "workout4",
// //       exercise_id: "benchpress4",
// //       name: "Bench Press",
// //       image_url: "[path/to/bench_press_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 10, rest_duration: 60},
// //         {set_number: 2, reps: 10, rest_duration: 60},
// //         {set_number: 3, reps: 10, rest_duration: 60},
// //       ],
// //     },
// //     {
// //       workout_id: "workout4",
// //       exercise_id: "lunges4",
// //       name: "Lunges",
// //       image_url: "[path/to/lunges_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 12, rest_duration: 45},
// //         {set_number: 2, reps: 12, rest_duration: 45},
// //         {set_number: 3, reps: 12, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout4",
// //       exercise_id: "plank4",
// //       name: "Plank",
// //       image_url: "[path/to/plank_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 45, rest_duration: 30},
// //         {set_number: 2, duration: 45, rest_duration: 30},
// //       ],
// //     },
// //   ];
// //
// //   // Adding each exercise as a subdocument under the specific workout document
// //   for (const exercise of exercises) {
// //     const workoutRef = db.collection("workouts").doc(exercise.workout_id);
// //     const exerciseRef = workoutRef.collection("exercises").doc(exercise.exercise_id);
// //     await exerciseRef.set({
// //       name: exercise.name,
// //       image_url: exercise.image_url,
// //       sets: exercise.sets,
// //     });
// //     console.log(`Exercise ${exercise.name} added under Workout 4 in Firestore`);
// //   }
// // }
// //
// // // Call the function to populate exercises for Workout 4
// // populateWorkout4Exercises().catch(console.error);
//
// // async function populateWorkout5Exercises() {
// //   // Define the exercises for Workout 5
// //   const exercises = [
// //     {
// //       workout_id: "workout5",
// //       exercise_id: "jumpingjacks5",
// //       name: "Jumping Jacks",
// //       image_url: "[path/to/jumping_jacks_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 60, rest_duration: 30},
// //         {set_number: 2, duration: 60, rest_duration: 30},
// //         {set_number: 3, duration: 60, rest_duration: 30},
// //       ],
// //     },
// //     {
// //       workout_id: "workout5",
// //       exercise_id: "legraises5",
// //       name: "Leg Raises",
// //       image_url: "[path/to/leg_raises_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 12, rest_duration: 45},
// //         {set_number: 2, reps: 12, rest_duration: 45},
// //         {set_number: 3, reps: 12, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout5",
// //       exercise_id: "plank5",
// //       name: "Plank",
// //       image_url: "[path/to/plank_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 50, rest_duration: 30},
// //         {set_number: 2, duration: 50, rest_duration: 30},
// //         {set_number: 3, duration: 50, rest_duration: 30},
// //       ],
// //     },
// //     {
// //       workout_id: "workout5",
// //       exercise_id: "squats5",
// //       name: "Squats",
// //       image_url: "[path/to/squats_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 15, rest_duration: 45},
// //         {set_number: 2, reps: 15, rest_duration: 45},
// //       ],
// //     },
// //   ];
// //
// //   // Adding each exercise as a subdocument under the specific workout document
// //   for (const exercise of exercises) {
// //     const workoutRef = db.collection("workouts").doc(exercise.workout_id);
// //     const exerciseRef = workoutRef.collection("exercises").doc(exercise.exercise_id);
// //     await exerciseRef.set({
// //       name: exercise.name,
// //       image_url: exercise.image_url,
// //       sets: exercise.sets,
// //     });
// //     console.log(`Exercise ${exercise.name} added under Workout 5 in Firestore`);
// //   }
// // }
// //
// // // Call the function to populate exercises for Workout 5
// // populateWorkout5Exercises().catch(console.error);
//
//
// // async function populateWorkout6Exercises() {
// //   // Define the exercises for Workout 6
// //   const exercises = [
// //     {
// //       workout_id: "workout6",
// //       exercise_id: "squats",
// //       name: "Squats",
// //       image_url: "[path/to/squat_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 12, rest_duration: 60},
// //         {set_number: 2, reps: 12, rest_duration: 60},
// //         {set_number: 3, reps: 12, rest_duration: 60},
// //         {set_number: 4, reps: 12, rest_duration: 60},
// //       ],
// //     },
// //     {
// //       workout_id: "workout6",
// //       exercise_id: "lunges",
// //       name: "Lunges",
// //       image_url: "[path/to/lunges_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 10, rest_duration: 45},
// //         {set_number: 2, reps: 10, rest_duration: 45},
// //         {set_number: 3, reps: 10, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout6",
// //       exercise_id: "deadlifts",
// //       name: "Deadlifts",
// //       image_url: "[path/to/deadlifts_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 10, rest_duration: 60},
// //         {set_number: 2, reps: 10, rest_duration: 60},
// //         {set_number: 3, reps: 10, rest_duration: 60},
// //       ],
// //     },
// //     {
// //       workout_id: "workout6",
// //       exercise_id: "jumpingjacks",
// //       name: "Jumping Jacks",
// //       image_url: "[path/to/jumping_jacks_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 60, rest_duration: 30},
// //         {set_number: 2, duration: 60, rest_duration: 30},
// //       ],
// //     },
// //   ];
// //
// //   // Adding each exercise as a subdocument under the specific workout document
// //   for (const exercise of exercises) {
// //     const workoutRef = db.collection("workouts").doc(exercise.workout_id);
// //     const exerciseRef = workoutRef.collection("exercises").doc(exercise.exercise_id);
// //     await exerciseRef.set({
// //       name: exercise.name,
// //       image_url: exercise.image_url,
// //       sets: exercise.sets,
// //     });
// //     console.log(`Exercise ${exercise.name} added under Workout 6 in Firestore`);
// //   }
// // }
// //
// // // Call the function to populate exercises for Workout 6
// // populateWorkout6Exercises().catch(console.error);
//
// //
// // async function populateWorkout7Exercises() {
// //   // Define the exercises for Workout 7
// //   const exercises = [
// //     {
// //       workout_id: "workout7",
// //       exercise_id: "bicepcurls",
// //       name: "Bicep Curls",
// //       image_url: "[path/to/bicep_curls_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 10, rest_duration: 45},
// //         {set_number: 2, reps: 10, rest_duration: 45},
// //         {set_number: 3, reps: 10, rest_duration: 45},
// //         {set_number: 4, reps: 10, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout7",
// //       exercise_id: "tricepdips",
// //       name: "Tricep Dips",
// //       image_url: "[path/to/tricep_dips_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 12, rest_duration: 45},
// //         {set_number: 2, reps: 12, rest_duration: 45},
// //         {set_number: 3, reps: 12, rest_duration: 45},
// //       ],
// //     },
// //     {
// //       workout_id: "workout7",
// //       exercise_id: "pushups",
// //       name: "Push-Ups",
// //       image_url: "[path/to/push_ups_image.png]",
// //       sets: [
// //         {set_number: 1, reps: 15, rest_duration: 30},
// //         {set_number: 2, reps: 15, rest_duration: 30},
// //         {set_number: 3, reps: 15, rest_duration: 30},
// //       ],
// //     },
// //     {
// //       workout_id: "workout7",
// //       exercise_id: "plank",
// //       name: "Plank",
// //       image_url: "[path/to/plank_image.png]",
// //       sets: [
// //         {set_number: 1, duration: 60, rest_duration: 30},
// //         {set_number: 2, duration: 60, rest_duration: 30},
// //       ],
// //     },
// //   ];
// //
// //   // Adding each exercise as a subdocument under the specific workout document
// //   for (const exercise of exercises) {
// //     const workoutRef = db.collection("workouts").doc(exercise.workout_id);
// //     const exerciseRef = workoutRef.collection("exercises").doc(exercise.exercise_id);
// //     await exerciseRef.set({
// //       name: exercise.name,
// //       image_url: exercise.image_url,
// //       sets: exercise.sets,
// //     });
// //     console.log(`Exercise ${exercise.name} added under Workout 7 in Firestore`);
// //   }
// // }
// //
// // // Call the function to populate exercises for Workout 7
// // populateWorkout7Exercises().catch(console.error);
//
//
// async function populateWorkout8Exercises() {
//   // Define the exercises for Workout 8
//   const exercises = [
//     {
//       workout_id: "workout8",
//       exercise_id: "deadlifts",
//       name: "Deadlifts",
//       image_url: "[path/to/deadlifts_image.png]",
//       sets: [
//         {set_number: 1, reps: 6, rest_duration: 90},
//         {set_number: 2, reps: 6, rest_duration: 90},
//         {set_number: 3, reps: 6, rest_duration: 90},
//         {set_number: 4, reps: 6, rest_duration: 90},
//       ],
//     },
//     {
//       workout_id: "workout8",
//       exercise_id: "benchpress",
//       name: "Bench Press",
//       image_url: "[path/to/bench_press_image.png]",
//       sets: [
//         {set_number: 1, reps: 8, rest_duration: 60},
//         {set_number: 2, reps: 8, rest_duration: 60},
//         {set_number: 3, reps: 8, rest_duration: 60},
//         {set_number: 4, reps: 8, rest_duration: 60},
//       ],
//     },
//     {
//       workout_id: "workout8",
//       exercise_id: "squats",
//       name: "Squats",
//       image_url: "[path/to/squats_image.png]",
//       sets: [
//         {set_number: 1, reps: 10, rest_duration: 60},
//         {set_number: 2, reps: 10, rest_duration: 60},
//         {set_number: 3, reps: 10, rest_duration: 60},
//       ],
//     },
//     {
//       workout_id: "workout8",
//       exercise_id: "bicepcurls",
//       name: "Bicep Curls",
//       image_url: "[path/to/bicep_curls_image.png]",
//       sets: [
//         {set_number: 1, reps: 12, rest_duration: 45},
//         {set_number: 2, reps: 12, rest_duration: 45},
//         {set_number: 3, reps: 12, rest_duration: 45},
//       ],
//     },
//   ];
//
//   // Adding each exercise as a subdocument under the specific workout document
//   for (const exercise of exercises) {
//     const workoutRef = db.collection("workouts").doc(exercise.workout_id);
//     const exerciseRef = workoutRef.collection("exercises").doc(exercise.exercise_id);
//     await exerciseRef.set({
//       name: exercise.name,
//       image_url: exercise.image_url,
//       sets: exercise.sets,
//     });
//     console.log(`Exercise ${exercise.name} added under Workout 8 in Firestore`);
//   }
// }
//
// // Call the function to populate exercises for Workout 8
// populateWorkout8Exercises().catch(console.error);
