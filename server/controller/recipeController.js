require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');


/**
 * GET /
 * Homepage
 */ 
exports.homepage = async(req,res) =>{
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);

    const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
    const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
    const brazilian = await Recipe.find({ 'category': 'Brazilian' }).limit(limitNumber);
    const mexican = await Recipe.find({ 'category': 'Mexican' }).limit(limitNumber);
    const spanish = await Recipe.find({ 'category': 'Spanish' }).limit(limitNumber);
    const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);
    const indian = await Recipe.find({ 'category': 'Indian' }).limit(limitNumber);




    const foods = {latest, thai, american, brazilian, mexican, spanish, chinese, indian};

    res.render('index', { title: 'Cooking Blog - Home', categories, foods });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Ocurred" });
  }
}

/**
 * GET /
 * Categories
 */ 
exports.exploreCategories = async (req,res) =>{
    try {
      const limitNumber = 100;
      const categories = await Category.find({}).limit(limitNumber);
      res.render('categories', { title: 'Cooking Blog - Categories', categories });
    } catch (error) {
      res.status(500).send({ message: error.message || "Error Ocurred" });
    }
  }
  
/**
 * GET /recepi/:id
 * Recepis
 */
exports.exploreRecepis = async (req,res) =>{
    try {
        const recipeId = req.params._id;
        const recipe =  await Recipe.findById( recipeId );
        res.render('recipe', { title: 'Cooking Blog - Recepies', recipe });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Ocurred"})
        
    }
}













// async function insertDymmyCategoryData(){
//     try {
//         await Category.insertMany([
//             {
//                 "name": "Thai",
//                 "image": "thai-food.jpg"
//             },
//             {
//                 "name": "American",
//                 "image": "american-food.jpg"
//             },
//             {
//                 "name": "Chinese",
//                 "image": "chinese-food.jpg"
//             },
//             {
//                 "name": "Mexican",
//                 "image": "mexican-food.jpg"
//             },
//             {
//                 "name": "Indian",
//                 "image": "indian-food.jpg"
//             },
//             {
//                 "name": "Spanish",
//                 "image": "spanish-food.jpg"
//             },
//             {
//                 "name": "Brazilian",
//                 "image": "brazilian-food.jpg"
//             }
//         ]);
//     } catch (error) {
//         console.log('error', + error);
//     }
// }

// insertDymmyCategoryData();



// async function insertDymmyRecipeData(){
//     try {
//         await Recipe.insertMany([
//             {
//             'name' : 'Southern fried chicken',
//             'description' : 'The most delicious fried chicken of the world, Source : https://www.jamieoliver.com/recipes/chicken-recipes/',
//             'email' : 'friedchicken@email.com',
//             'ingredients': ['1 Kg of chicken breast','sweet souce','black pepper','orange juicer','4 sweet potatos','1 level teaspoon baking powder'],
//             'category' : 'American',
//             'image': 'southern-chicken.jpg',
//         },
//         {
//             'name' : 'Southern fried chicken',
//             'description' : 'The most delicious fried chicken of the world, Source : https://www.jamieoliver.com/recipes/chicken-recipes/',
//             'email' : 'friedchicken@email.com',
//             'ingredients': ['1 Kg of chicken breast','sweet souce','black pepper','orange juicer','4 sweet potatos','1 level teaspoon baking powder'],
//             'category' : 'American',
//             'image': 'southern-chicken.jpg',
//         },
//         {
//             'name' : 'Southern fried chicken',
//             'description' : 'The most delicious fried chicken of the world, Source : https://www.jamieoliver.com/recipes/chicken-recipes/',
//             'email' : 'friedchicken@email.com',
//             'ingredients': ['1 Kg of chicken breast','sweet souce','black pepper','orange juicer','4 sweet potatos','1 level teaspoon baking powder'],
//             'category' : 'American',
//             'image': 'southern-chicken.jpg',
//         },
//         {
//             'name' : 'Southern fried chicken',
//             'description' : 'The most delicious fried chicken of the world, Source : https://www.jamieoliver.com/recipes/chicken-recipes/',
//             'email' : 'friedchicken@email.com',
//             'ingredients': ['1 Kg of chicken breast','sweet souce','black pepper','orange juicer','4 sweet potatos','1 level teaspoon baking powder'],
//             'category' : 'American',
//             'image': 'southern-chicken.jpg',
//         },
//         {
//             'name' : 'Southern fried chicken',
//             'description' : 'The most delicious fried chicken of the world, Source : https://www.jamieoliver.com/recipes/chicken-recipes/',
//             'email' : 'friedchicken@email.com',
//             'ingredients': ['1 Kg of chicken breast','sweet souce','black pepper','orange juicer','4 sweet potatos','1 level teaspoon baking powder'],
//             'category' : 'American',
//             'image': 'southern-chicken.jpg',
//         }
//     ]);
//     } catch (error) {
//         console.log('error', + error);
//     }
// }

// insertDymmyRecipeData();