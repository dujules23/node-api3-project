const express = require('express');

const server = express();

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

//global middleware
const morgan = require("morgan")

const userRouter = require('./users/users-router')

const { logger } = require("./middleware/middleware")


// User Router
server.use("/api/users", userRouter)


// Use middleware
server.use(morgan("dev"))
server.use(logger)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
