const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const { FindCursor } = require("mongodb");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connect_mysql");
const Book = require("./bookModel");

// For Inserting data:

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Book table created successfully!");

//     Book.create({
//       title: "Node with you",
//       author: "Jaydeeo Vaghela",
//       release_date: "2021-1-14",
//       subject: 3,
//     })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => {
//         console.error("Failed to create a new record : ", error);
//       });
//   })
//   .catch((error) => {
//     console.error("Unable to create table : ", error);
//   });

// for fetching all data

async function allBook() {
  try {
    const book = await Book.findAll();
    console.log(book);
  } catch (err) {
    console.log(err);
  }
}

allBook();
// findOne
// sequelize
//   .sync()
//   .then(() => {
//     Book.findOne({
//       where: {
//         id: "1",
//       },
//     })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => {
//         console.error("Failed to retrieve data : ", error);
//       });
//   })
//   .catch((error) => {
//     console.error("Unable to create table : ", error);
//   });

// For deleting:

// sequelize
//   .sync()
//   .then(() => {
//     Book.destroy({
//       where: {
//         id: 2,
//       },
//     })
//       .then(() => {
//         console.log("Successfully deleted record.");
//       })
//       .catch((error) => {
//         console.error("Failed to delete record : ", error);
//       });
//   })
//   .catch((error) => {
//     console.error("Unable to create table : ", error);
//   });
