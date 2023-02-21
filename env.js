
//SECOND EXAMPLE


//TO SAVE KEY AS AN ENV VARIABLE
//npm i dotenv --save-dev
//touch .env env.js

//add .env to .gitignore
//add token to .env file: TOKEN = 'someTokenHere'



//To verify with process.env :
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECOND_SECRET_KEY = process.env.SECOND_SECRET_KEY

const secondToken = jwt.sign({username : 'daviLux'}, SECOND_SECRET_KEY)
const secondVerifyTrue = jwt.verify(secondToken, SECOND_SECRET_KEY)

console.log(secondVerifyTrue)
