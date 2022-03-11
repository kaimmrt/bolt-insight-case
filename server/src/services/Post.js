const Post = require('../models/Post')

const insert = async (data) => {
    const post = new Post(data)
    return post.save()
}

const findAll = () => {
    return Post.find().sort({ createdAt: -1 });
}

const remove = (data) => {
    return Post.findByIdAndRemove(data);
}

module.exports = {
    insert,
    findAll,
    remove
}