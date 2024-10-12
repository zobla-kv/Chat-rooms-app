class User {
  id;

  constructor(id) {
    this.id = id;
  }
}

class AuthUser extends User {
  constructor(id, username, token) {
    super(id);
    this.username = username;
    this.token = 'test-token';
  }

  getUsername = () => this.username;
  getToken = () => this.token;
}

class SocketUser extends User {
  constructor(id) {
    super(id); 
  }
}


module.exports = {
  AuthUser,
  SocketUser
};