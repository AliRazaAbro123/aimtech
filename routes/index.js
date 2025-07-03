const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/messageSubmit", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Setup Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alirazaabro2580@gmail.com", // your Gmail
      pass: "fcwf ajgf ehml knhn",        // app password or Gmail password
    },
  });

  // Email content
  let mailOptions = {
    from: `"${name}" <${email}>`,
    to: "yourgmail@gmail.com", // where you want to receive messages
    subject: `Subject: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.send("Failed to send email. Try again later.");
  }
})
module.exports = router;
