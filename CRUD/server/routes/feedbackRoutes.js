const express = require('express');
const {createFeedback, getAllFeedback, getFeedbackById, deleteFeedbackById} = require('../controllers/feedbackController');

const router = express.Router();

router.post('/',createFeedback);
router.get('/', getAllFeedback);
router.get('/:id', getFeedbackById);
router.delete('/:id', deleteFeedbackById);

module.exports = router;
