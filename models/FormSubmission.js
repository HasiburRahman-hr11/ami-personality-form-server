const { Schema, model } = require("mongoose");

const formSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    answers: [String],
  },
  { timestamps: true }
);

const FormSubmission = model("FormSubmission", formSchema);
module.exports = FormSubmission;
