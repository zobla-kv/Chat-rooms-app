const authRouter = require('express').Router();
const authUserManager = require('../services/user').authUserManager();

authRouter.post('/login', (req, res) => {
  const nickname = 'dzoni' // ne radi nista
  console.log('get Users before: ', authUserManager.getUsers())
  const user = authUserManager.addUser(nickname);
  console.log('get Users after: ', authUserManager.getUsers())

  res.json(user);
})

module.exports = authRouter;