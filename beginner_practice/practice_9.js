const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const prompt = require("prompt-sync")();

const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  // host: "smtp.gmail.com",
  // port: 465,
  // secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log("-------------Enter below details for sending mail--------------");

let from = prompt("From: ");
let to = prompt("To: ");
let subject = prompt("Subject: ");
let text = prompt("message: ");

const mailOptions = {
  from,
  to,
  subject,
  text,
};

transport.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
