const mailer = require("./mailer");

const sendEmail = (req, next) => {
  const review = req.body;
  const emailOptions = {
    from: "cyril.r.freeman@gmail.com",
    to: "cyril.r.freeman@gmail.com",
    subject: "Contact venant du portfolio",
    html: `
    <p>Bonjour Cyril,</p>
    <p>Vous avez reçu un nouvel avis de la part de ${review.firstName} ${review.lastName}.</p>
    <p>Message : ${review.message}</p>
    <p>Si vous souhaitez contacter ${review.firstName}, envoyez-lui un mail à l'adresse suivante: ${review.email} </p>
  `,
  };

  mailer.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.info(info);
    }
    next();
  });
};

module.exports = { sendEmail };
