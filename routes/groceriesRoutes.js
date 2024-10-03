const express = require('express');
const router = express.Router();
const groceriesController = require('../controllers/groceriescontroller');
const { requireAuth } = require('../middleware/authmiddleware');

router.post('/searchgroceries', groceriesController.groceries_post);

<<<<<<< HEAD
router.post('/searchgrocerieslist', groceriesController.grocerieslist_post);
=======
>>>>>>> new-origin/main
module.exports = router;
