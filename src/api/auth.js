import { ENV } from "@/utils";

export class Auth {
  async register(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
      const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) {
        throw new Error(result.message);
      }
    } catch (error) {
      throw error;
    }
  }
  async login(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
      const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) {
        throw new Error(result.message);
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
