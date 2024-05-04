const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "http://localhost:8080",
  projectId: "flywheel-backend-test",
});

const db = admin.firestore();
db.settings({
  host: "localhost:8080",
  ssl: false,
});

/**
 * Function to populate Firestore with activity levels
 * @return {void}
 */
async function populateActivityLevels() {
  const activityLevels = {
    extra_active: {coefficient: 1.9, name: "Extra Active"},
    very_active: {coefficient: 1.75, name: "Very Active"},
    moderately_active: {coefficient: 1.55, name: "Moderately Active"},
    lightly_active: {coefficient: 1.375, name: "Lightly Active"},
    sedentary: {coefficient: 1.2, name: "Sedentary"},
  };

  // eslint-disable-next-line guard-for-in
  for (const level in activityLevels) {
    const activityRef = db.collection("activity_levels").doc(level);
    await activityRef.set(activityLevels[level]);
    console.log(`Activity level ${level} added to Firestore`);
  }
}


/**
 * Function to populate Firestore with user objects
 * @return {void}
 */
async function populateUser() {
  const users = [
    {
      activity_level: "activity_levels/very_active",
      age: 32,
      bmr: null,
      daily_calories: null,
      gender: "male",
      height_cm: 185,
      weight_kg: 90,
    },
    // Add more user objects here if needed
  ];

  // Add each user to the Firestore
  for (const user of users) {
    const userRef = db.collection("users").doc("6ixBI7jArSyMaiB2HP28xQ79py2");
    await userRef.set(user).then(() => {
      console.log(`User with ID ${userRef.id} added to Firestore`);
    });
  }
}


/**
 * Function to populate Firestore with activity levels and user objects
 * @return {void}
 */
async function populateData() {
  await populateActivityLevels();
  await populateUser();
}
populateData();


