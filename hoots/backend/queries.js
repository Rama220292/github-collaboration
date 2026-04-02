/*------------------------------ Starter Code ------------------------------*/
//@ts-check
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const User = require("./models/User");

const connect = async () => {
  mongoose.set("debug", true);
  if (!process.env.MONGODB_URI) {
    throw new Error("missing MONGODB_URI");
  }
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  await runQueries();

  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
  process.exit();
};

connect();

/*----------------------------- Query Functions -----------------------------*/

const createUsers = async () => {
  const usersData = [
    { username: "simon", hashedPassword: "123" },
    { username: "kerin", hashedPassword: "456" },
  ];
  console.log(usersData);

  // await Pet.deleteMany({});
  for (const userData of usersData) {
    // const pet = await Pet.create(userData);
    // console.log("New pet:", pet);
  }
};

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log("Queries running.");
  // await createPets();
};
