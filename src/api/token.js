const { ENV } = require("@/utils");
export class Token {
  setToken(token) {
    localStorage.setItem(ENV.TOKEN, token);
  }
}
