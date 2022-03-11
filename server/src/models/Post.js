const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: String,
    content: String,
    tags: Array,
}, { timestamps: true, versionKey: false })


module.exports = mongoose.model('post', PostSchema)