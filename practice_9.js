var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jaydeepvaghela.thetatechnolabs@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

var mailOptions = {
  from: "jaydeepvaghela.thetatechnolabs@gmail.com",
  to: "vaghelajaydeep08@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
