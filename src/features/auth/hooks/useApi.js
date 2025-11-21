import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useApi = () => {
  const { token, refreshToken } = useContext(AuthContext);
  console.log("Token in useApi:", token);

  const authorizedApi = async (endpoint, options = {}, retry = true) => {
    let finalOptions = {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    };

    const res = await fetch(endpoint, finalOptions);

    if (res.status === 401 && retry) {
      const newToken = await refreshToken();
      if (!newToken) return res; 

      finalOptions = {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${newToken}`,
        },
      };

      return await fetch(endpoint, finalOptions);
    }

    return res;
  };

  return authorizedApi;
};
