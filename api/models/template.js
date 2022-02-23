const mongoose = require('mongoose');

const TemplateSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name template is required']
    },
    creator: {
        type: String,
        required: [true, 'The name of the creator is required'],
        unique: true
    },
    colors: {
        type: String,
        required: [true, 'the colors are required']
    },
    

});


const Template =  mongoose.model( 'Template', TemplateSchema );

module.exports = Template;
