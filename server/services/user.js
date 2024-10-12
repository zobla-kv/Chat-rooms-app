const { AuthUser, SocketUser } = require('../model/user');
const generateUserId = (() => {
  let userId = 0;
  return () => ++userId;
})();

function authUserManager() {
  const users = [];

  function addUser(nickname) {
    const userId = generateUserId();
    const user = new AuthUser(userId, 'dzoni' + userId);
    users.push(user);
    return user;
  }

  function removeUser(id) {
    const user = getUserById(id);
    if (user) {
      users = users.filter(user => user.id !== id); // will this work?
    }
  }

  const getUsers = () => users;
  const getUserById = (id) => users.find(user => user.id === id) || null;

  return {
    addUser,
    removeUser,
    getUsers,
    getUserById
  }
}

function socketUserManager() {
  const users = [];

  function addUser() {
    const userId = generatedUserId();
    const user = new SocketUser(userId);
    users.push(user);
    return users;
  }

  const getUsers = () => users;

  return {
    addUser,
    getUsers
  }
}


module.exports = {
  authUserManager,
  socketUserManager
};