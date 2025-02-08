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
    (async () => {
      const token = tokenCtrl.getToken();
      if (!token) {
        logout();
        setLoading(false);
        return;
      }
      if (tokenCtrl.hasExpiredToken(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
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
      setLoading(false);
    }
  };
  const logout = () => {
    tokenCtrl.removeToken();
    setUser(null);
    setToken(null);
  };
  const updateUser = async (key, value) => {
    setUser({ ...user, [key]: value });
  };
  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };
  if (loading) {
    return null;
  }
  return (
    <authContext.Provider value={data}>{props.children}</authContext.Provider>
  );
}
