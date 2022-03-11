const { insert, findAll, remove } = require('../services/Post')
const httpStatus = require('http-status')

exports.getAllPosts = async (req, res) => {
    findAll()
        .then((response) => {
            res.status(httpStatus.OK).send(response)
        })
        .catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
        })
}

exports.sendPost = async (req, res) => {
    insert(req.body)
        .then((response) => {
            res.status(httpStatus.CREATED).send(response)
        })
        .catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
        })
}

exports.deletePost = async (req, res, next) => {
    if (!req.params.post_id) {
        return res.status(httpStatus.BAD_REQUEST).send({
            message: "id information is missing."
        })
    }
    remove(req.params.post_id)
        .then((response) => {
            res.status(httpStatus.OK).send(response)
        })
        .catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
        })
}