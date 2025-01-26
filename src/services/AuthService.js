import axios from "axios";

const API_URL = "http://localhost:8081/api/auth";

const AuthService = {
  async logIn(username, password) {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    if (!response.data) {
      throw Error("Invalid username or password");
    }
    return response.data;
  },
};

export default AuthService;
