const Joi = require('joi')

const createValidation = Joi.object({
    title: Joi.string().required().min(2),
    image: Joi.string().required(),
    content: Joi.string().required().min(2),
    tags: Joi.array().required(),
})

module.exports = {
    createValidation,
}