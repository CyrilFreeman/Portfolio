const express = require("express");

const router = express.Router();

const { sendEmail } = require("./middlewares/sendEmail");

router.post("/", sendEmail)