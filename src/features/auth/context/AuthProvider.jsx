import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
// import { useApi } from "../hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState(null);
  // const api = useApi();

  const userIsInRole = (role) => {
    return user.roles != null && user.roles.includes(role);
  }

  const login = async (userData) => {
    const options = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    };

    try {
      const res = await fetch(`${API_URL}/auth/login`, options);
      if (!res.ok) throw new Error("Error en login");
      const data = await res.json();
      const { token: accessToken, user } = data;
      setToken(accessToken);
      console.log(user);
      setUser(user);
      console.log("Login exitoso ", accessToken);
      return accessToken;
    } catch (err) {
      console.error("Error en login:", err);
      throw err;
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        await refreshToken();
      } catch (error) {
        console.log("No se pudo refrescar token al iniciar ",error);
      }
    };

    init();
  }, []);

  const logout = () => {
    setToken(null);
    // api(`${API_URL}/auth/logout`, { method: "POST" });
  };

  const refreshToken = async () => {
    const res = await fetch(`${API_URL}/auth/refresh-token`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) setToken(null);

    const { token: newToken, user } = await res.json();
    console.log("Token refreshed:", newToken);
    setToken(newToken);
    setUser(user); 
    return newToken;
  };

  const register = async (userForm) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: userForm,
      credentials: "include",
    });

    if (!res.ok) throw new Error("Error al registrar usuario");

    const { token: newToken, user } = await res.json();
    setToken(newToken);
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, refreshToken, register, user, userIsInRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};
