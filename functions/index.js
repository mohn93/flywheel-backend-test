const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {logger} = require("firebase-functions");

admin.initializeApp({projectId: "flywheel-backend-test"});

/**
 * Calculates BMR Based on gender
 * @param {string} gender
 * @param {number} weight
 * @param {number} height
 * @param {number} age
 * @return {number}
 */
function getBmrBasedOnGender(gender, weight, height, age) {
  // log all the parameters
  logger.log(`gender: ${gender}, weight: ${weight}, 
  height: ${height}, age: ${age}`);
  return gender === "male" ? 10 * weight +
    6.25 * height - 5 * age + 5 :
    10 * weight + 6.25 * height - 5 * age - 161;
}

exports.calculateCalories = functions.firestore
    .document("users/{userId}")
    .onWrite(async (change) => {
      const userData = change.after.exists ? change.after.data() : null;

      if (!userData) {
        logger.log("No user data available.");
        return null;
      }

      const {
        "weight_kg": weight,
        "height_cm": height,
        age,
        gender,
        "activity_level": activityLevel,
      } = userData;

      // Retrieve the activity level coefficient
      try {
        logger.log("Getting activity level coefficient for: " + activityLevel);
        const activityRef = admin.firestore().doc(activityLevel);
        const doc = await activityRef.get();

        if (!doc.exists) {
          throw new Error("Activity level document does not exist: " +
            activityLevel);
        }

        const activityData = doc.data();
        const coefficient = activityData.coefficient;
        const bmr = getBmrBasedOnGender(gender, weight, height, age);
        const dailyCalories = bmr * coefficient;

        logger.log(`Calculated BMR: ${bmr}, Daily Calories: ${dailyCalories}`);
        await change.after.ref.update({bmr, daily_calories: dailyCalories});
        logger.log("Successfully updated user document " +
          "with BMR and daily calories.");
      } catch (error) {
        logger.error("Failed to calculate or update " +
          "BMR and daily calories:", error);
      }
    });


exports.addUserToFirestore = functions.auth.user().onCreate((user) => {
  // Reference to Firestore 'users' collection
  const usersRef = admin.firestore().collection("users");

  // Data to save for new user
  const userData = {
    email: user.email, // User's email address
    createdAt: new Date(), // Timestamp of user creation
  };

  // Add the user data to the 'users' collection
  return usersRef.doc(user.uid).set(userData)
      .then(() => {
        console.log(`Successfully added new user with ID: 
        ${user.uid} to Firestore.`);
        return null; // Successful execution of function
      })
      .catch((error) => {
        console.error("Error writing to Firestore: ", error);
        throw new Error("Failed to add user to Firestore.");
      });
});
