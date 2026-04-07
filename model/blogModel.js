const mongoose = require('mongoose');

const Schema = mongoose.Schema()

// const blogSchema=new mongoose.Schema({}) same as below
const blogSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    Subtitle: {
        type: String, //string used for some letters
    },
    Description: {
        type: Text,//Text used for more letters,words..
    },
    Image: {
        type: String,
    }

});

const Blog = mongoose.model('Blog', blogSchema); // it means that  makes (Blog) named table in db

module.exports = Blog;