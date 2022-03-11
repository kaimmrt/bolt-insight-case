const validate = require('../middleware/validate')
const schemas = require('../validations/Post')

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')

router.get('/', postController.getAllPosts);
router.route("/").post(validate(schemas.createValidation), postController.sendPost)
router.delete('/:post_id', postController.deletePost)

module.exports = router;