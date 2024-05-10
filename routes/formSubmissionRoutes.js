const {
  createFormSubmission,
} = require("../controllers/formSubmissionController");

const router = require("express").Router();

router.post("/form-submission/add", createFormSubmission);

module.exports = router;
