const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, requird: true },
    content: { type: String, requird: true },
    imagePath : { type: String, requird: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User",requird: true }
});

module.exports = mongoose.model('Post', postSchema);