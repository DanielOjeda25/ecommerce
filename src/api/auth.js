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
      console.log(result);
      console.log(data);

      if (response.status !== 200) {
        throw new Error(result.message);
      }
    } catch (error) {
      throw error;
    }
  }
}
