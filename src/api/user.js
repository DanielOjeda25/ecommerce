import { Auth } from "./auth";

const { ENV } = require("@/utils");
export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
      const params = {
        headers: {
          Authorization: `Bearer ${Auth.getToken()}`,
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
