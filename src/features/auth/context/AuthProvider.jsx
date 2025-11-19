import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const api = useApi();

  const login = (userData) => {
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

    fetch(`${API_URL}/auth/login`, options)
      .then((res) => res.json())
      .then((data) => {
        const { token: accessToken } = data;
        setToken(accessToken);
        console.log("Login exitoso ",accessToken);
      })
      .catch((error) => console.warn("Error en login:", error));
  };

  const logout = () => {
    setToken(null);
    api(`${API_URL}/auth/logout`, { method: "POST" });
  };

  const refreshToken = async () => {
    const res = await fetch(`${API_URL}/auth/refresh-token`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) setToken(null);

    const { token: newToken } = await res.json();
    console.log("Token refreshed:", newToken);
    setToken(newToken);
    return newToken;
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
