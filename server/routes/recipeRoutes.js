const express = require('express')
const router = express.Router();
const recipeController = require('../controller/recipeController');

router.get('/', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/recipe/:id', recipeController.exploreRecepis);

module.exports = router;