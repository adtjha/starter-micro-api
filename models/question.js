const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['categorize', 'cloze', 'comprehension'],
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    formId: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
