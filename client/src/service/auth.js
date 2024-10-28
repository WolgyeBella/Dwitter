export default class AuthService {
  async login(username, password) {
    return {
      username: "bella",
      token: "abc1234",
    };
  }

  async me() {
    return {
      username: "bella",
      token: "abc1234",
    };
  }

  async logout() {
    return;
  }

  async signup(username, password, name, email, url) {
    return {
      username: "bella",
      token: "abc1234",
    };
  }
}
