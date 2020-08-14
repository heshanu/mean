const JwtStrategy=require('passport-jwt').Strategy
const ExtractJwt=require('passport-jwt').ExtractJwt
const User=require('../models/user')
const config=require('../config/database')
const jwt = require("jsonwebtoken");
// const token = jwt.sign(user.toJSON(), config.secret, {
//   expiresIn: 604800, // 1 week
// });

//const token = jwt.sign({ linkedinUser }, config.secret, { expiresIn: 604800 });
//const token = jwt.sign(linkedinUser.toJSON(), config.secret);

module.exports=function(passport){
    let opts={};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    //opts.jwtFormRequest=ExtractJwt.fromAuthHeader();
    opts.secretOrKey=config.secret;
    passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
        User.getUserById(jwt_payload._doc._id,(err,user)=>{
            if(err){
                return done(err,false)
            }

            if(user){
                return done(null,user)
            }else{
                return done(null,false)
            }
        })
    }))
}