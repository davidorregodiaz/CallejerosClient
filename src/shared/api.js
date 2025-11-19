// import { tokenStore } from "./helpers";

// export const API_URL = "http://localhost:5239/api";

// export const api = async (endpoint, options = {}, retry = true) => {
//   let finalOptions = {
//     method: options.method || "GET",
//     credentials: "include",
//     headers: {
//       ...(options.headers || {}),
//       "Content-Type": options.body ? "application/json" : undefined,
//     },
//     body: options.body,
//   };

//   const accessToken = tokenStore.getToken();
//   if (accessToken) {
//     finalOptions.headers.Authorization = `Bearer ${accessToken}`;
//   }

//   let res = await fetch(`${API_URL}${endpoint}`, finalOptions);

//   if ((res.status === 401 || res.status === 403) && retry) {

//     const refreshRes = await fetch(`${API_URL}/auth/refresh-token`, {
//       method: "GET",
//       credentials: "include",
//     });

//     if (!refreshRes.ok) {
//       tokenStore.setToken(null);
//       throw new Error("Session expired");
//     }

//     const refreshData = await refreshRes.json();
//     tokenStore.setToken(refreshData.token);

//     finalOptions.headers.Authorization = `Bearer ${refreshData.token}`;
//     res = await fetch(`${API_URL}${endpoint}`, finalOptions);
//   }

//   if (!res.ok) {
//     throw new Error(`Error ${res.status}: ${await res.text()}`);
//   }

//   return res;
// };
