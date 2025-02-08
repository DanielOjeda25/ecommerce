import { Token, User } from "@/api";

const { createContext, useState, useEffect } = require("react");

export const authContext = createContext();
const tokenCtrl = new Token();
const userCtrl = new User();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (token) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMe();
      setUser(response);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const data = {
    accessToken: token,
    user,
    login,
    logout: null,
    updateUser: null,
  };
  if (loading) {
    return null;
  }
  return (
    <authContext.Provider value={data}>{props.children}</authContext.Provider>
  );
}
