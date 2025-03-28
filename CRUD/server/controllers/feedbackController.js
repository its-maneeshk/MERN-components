const Feedback = require('../models/FeedbackSchema');

const createFeedback = async(req, res) => {
    const { name, rating, feedback } = req.body;
    const newFeedback = new Feedback(
        { name, rating, feedback }
    );

    try {
        const saveFeedback = await newFeedback.save();
        res.status(201).json({success: true, message: 'Feedback created successfully.', data: saveFeedback });
    }
    catch(error) {
        res.status(500).json({ message : error.message });
    }
};

const getAllFeedback = async(req, res) => {
    try {
        const feedbacks = await Feedback.find({});
        if(feedbacks) {
            res.status(200).json(feedbacks)
        } else {
            res.status(404).json({ message : "No feedback found."})
        }
    }
    catch(error) {
        res.status(500).json({ message : error.message });
    }
};

const getFeedbackById = async(req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (feedback) {
            res.status(200).json({                 success: true,
                message: 'Feedback deleted successfully.',
                deletedFeedback: feedback});
        } else {
            res.status(404).json({ message : "No feedback found with specified ID."});
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message : error.message });
    }
};

const deleteFeedbackById = async(req, res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        if(feedback) {
            res.status(200).json(feedback);
        } else {
            res.status(404).json({ message : 'No feedback found with specified ID.'});
        }
    }
    catch (error) {
        res.status(500).json({ message : error.message });
    }
};

module.exports = {createFeedback, getAllFeedback, getFeedbackById, deleteFeedbackById};