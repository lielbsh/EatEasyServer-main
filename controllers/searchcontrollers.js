const { searchRecipes } = require("../puppeteer/searchRecipes")
const { extractRecipe } = require("../puppeteer/extractRecipe")

module.exports.searchrecipe_post = async(req, res) => {
  let { stringInput } = req.body
  let searchResults  = await(searchRecipes(stringInput)) 
<<<<<<< HEAD
=======
  console.log(searchResults)
>>>>>>> new-origin/main
   res.json({searchResults}) 
}


module.exports.extractrecipe_post = async(req, res) => {
  let { recipeURL } = req.body
  let outputRecipe = await(extractRecipe(recipeURL))
<<<<<<< HEAD
=======
  console.log(outputRecipe)
>>>>>>> new-origin/main
  res.json({outputRecipe}) 
}
