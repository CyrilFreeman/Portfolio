const express = require("express");
const router = express.Router();
const mailer = require("./mailer");


router.post("/send-email", (req, res) => {
  const { firstName, lastName, message, email } = req.body;

  const mailOptions = {
    from: "your_email@gmail.com",
    to: "destination_email@example.com",
    subject: "Sujet de l'email",
    html: `
        <p>Bonjour,</p>
        <p>Vous avez reçu un nouvel email de la part de ${firstName} ${lastName} (${email}) :</p>
        <p>${message}</p>
      `,
  };

  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res
        .status(500)
        .send("Une erreur est survenue lors de l'envoi de l'email.");
    } else {
      console.info("Email envoyé : " + info.response);
      res.status(200).send("Email envoyé avec succès !");
    }
  });
});

module.exports = router;
