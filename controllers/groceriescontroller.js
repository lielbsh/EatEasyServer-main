<<<<<<< HEAD
const { findingredientid,listfindingredientid } = require("../puppeteer/matchdatabase");
=======
const { findingredientid } = require("../puppeteer/matchdatabase");
>>>>>>> new-origin/main

module.exports.groceries_post = async (req, res) => {
  try {
    let { stringInput } = req.body;
    let groceriesSearchResults = await findingredientid(stringInput);
    console.log(groceriesSearchResults);
    res.json({ groceriesSearchResults });
  } catch (error) {
    console.error("Error fetching ingredient results:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
<<<<<<< HEAD
};


module.exports.grocerieslist_post = async (req, res) => {
  try {
    let { stringInputList } = req.body;
    let groceriesSearchResults = await listfindingredientid(stringInputList);
    console.log(groceriesSearchResults);
    res.json({ groceriesSearchResults });
  } catch (error) {
    console.error("Error fetching ingredient results:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
=======
>>>>>>> new-origin/main
};