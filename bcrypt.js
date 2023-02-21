const bcrypt = require('bcrypt')

async function hash(password){
  //salt adds a layer of random
  const SALT = 3;
  const hashed = await bcrypt.hash(password, SALT)
  console.log('hashed password: ', hashed)
}

async function check(password, hashedPassword){
  const result = await bcrypt.compare(password, hashedPassword)
  console.log(`is ${password} the password? : `, result)
}

//hash('somePassword')
check('somePassword', '$2b$04$5wQyCImGyuDhDIj78FeqxeplIoVXBX.xhpMzh.Zz06yhAhDyIle1m')

