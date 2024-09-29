const express=require('express')
const router=express.Router();
const authController= require('../controllers/authcontrollers')
const {requireAuth}=require('../middleware/authmiddleware');


router.post('/', authController.signup_post);

router.post('/verifymail', authController.signupverifymail_post);  

router.post('/checkcode',requireAuth, authController.signupcheckcode_post);  

router.post('/setaccount',requireAuth, authController.signupsetaccount_post); 




module.exports=router