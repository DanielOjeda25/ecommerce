const { ENV, authFetch } = require("@/utils");
export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
      const response = await authFetch(url);

      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
