const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    headerImage: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    }],
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
