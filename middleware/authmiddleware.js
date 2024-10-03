const cookieParser = require('cookie-parser');
const jwt=require('jsonwebtoken');
const secretkey='sKt408oGhEDVcX/su8oRkehvMoUkXvFtkkcvJdoNpqKO9ycQ.h0vIKA2s5QF0AVWUe'

<<<<<<< HEAD
const requireAuth =(req,res,next)=>{
    const stringtoken=req.cookies.jwt;
    console.log(stringtoken)
    const token = stringtoken.split(',')[0]
    console.log(token)
    if(token){
        jwt.verify(token,secretkey,(err,decodedToken)=>{
            console.log(decodedToken)
            if (err){
                res.redirect('/');
                
            }else{
                
=======
const requireAuth = (req,res,next)=>{
    const stringtoken = req.cookies.jwt
    const token = stringtoken.split(',')[0]
    if(token){
        jwt.verify(token,secretkey,(err,decodedToken)=>{
            if (err){
                res.redirect('/');
            }else{
>>>>>>> new-origin/main
                req.decodedToken=decodedToken
                next()
            }
        })
    }else{
        res.redirect('/');
<<<<<<< HEAD
        
=======
>>>>>>> new-origin/main
    }
}
module.exports={requireAuth};