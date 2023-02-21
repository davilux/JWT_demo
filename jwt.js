
//FIRST EXAMPLE

const jwt = require('jsonwebtoken')

//This should not be stored in code. It is best practice to store it as an environment variable. We don't want the token published in GitHub because it would be a security risk.
//How to handle this is described in .env
const SECRET_KEY = 'contemporaryCircus2019'

const token = jwt.sign({username : 'daviLux'}, SECRET_KEY)
const verifyTrue = jwt.verify(token, SECRET_KEY)



//Some logs just to show what's going on:

console.log(verifyTrue)
//{ username: 'daviLux', iat: 1676994777 }
//iat refers to "issued at", so it will be different If I issue a token again.


//Now let's take a look at the pieces of the token:
console.log("\n\n\n---------------JWT TOKEN---------------\n", token);
const pieces = token.split('.');
console.log(
  "\n---------------HEADER------------------\n", pieces[0],
  "\n\n---------------PAYLOAD-----------------\n",pieces[1],
  "\n\n---------------SIGNATURE---------------\n",pieces[2],
  "\n\n")

//   ---------------JWT TOKEN---------------
//   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlMdXgiLCJpYXQiOjE2NzY5OTUwMDB9.xVmxazgky6XEDGe5PsTM-K65YArEMSc-dYfhBG2is_k

//  ---------------HEADER------------------
//   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

//  ---------------PAYLOAD-----------------
//   eyJ1c2VybmFtZSI6ImRhdmlMdXgiLCJpYXQiOjE2NzY5OTUwMDB9

//  ---------------SIGNATURE---------------
//   xVmxazgky6XEDGe5PsTM-K65YArEMSc-dYfhBG2is_k
