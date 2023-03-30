// Database Connection: Create a program that connects to a
// database like MongoDB or MySQL and retrieves data from it.
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./userModel");

dotenv.config({ path: "./config.env" });

// const DB = process.env.DATABASE_LOCAL;

const DB = process.env.DATABASE_LOCAL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const users = JSON.parse(fs.readFileSync(`users.json`, "utf-8"));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });

    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await User.deleteMany();

    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);

//node dev-data/data/import-dev-data.js --import
// node dev-data/data/import-dev-data.js --delete
