const Users = require('../users/users-model')
// const Posts = require('../posts/posts-model')


function logger(req, res, next) {
  // DO YOUR MAGIC

  console.log( req.method, req.url, )
  console.timeStamp
  next();
  
}

const validateUserId = async (req, res, next) =>  {
  // DO YOUR MAGIC
  const { id } = req.params
  try{
    const user = await Users.getById(id)
    if(!user){
      res.status(404).json({ message: "user not found" })
    }
    else{
      console.log("valid user")
      req.user = user
      next();
    }
  }
  catch{
    res.status(500).json({ message: "error finding user"})
  }
    
}


const validateUser = async (req, res, next) => {
  // DO YOUR MAGIC
  console.log(req.body)
  const { name } = req.body

  console.log(req.body)
  try{
    if(!name){
      res.status(400).json({ message: "missing required name field"})
    }
    else{
      next();
    }
  }
  catch{
    res.status(500).json({ message: "error finding user"})
  }
  
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules

module.exports = {
  logger,
  validateUserId,
  validateUser
}