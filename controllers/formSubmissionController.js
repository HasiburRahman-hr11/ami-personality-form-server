const User = require("../models/User");
const FormSubmission = require("../models/FormSubmission");
const mongoose = require("mongoose");

exports.createFormSubmission = async (req, res) => {
  const { name, email, answers } = req.body;
  try {
    const newForm = new FormSubmission({
      name,
      email,
      answers,
    });
    // Save form Data to database
    await newForm.save();

    res.status(201).json(newForm);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
