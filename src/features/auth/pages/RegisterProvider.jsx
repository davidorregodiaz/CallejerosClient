// RegisterSteps.jsx
import React, { useReducer, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const STORAGE_KEY = "register_data_v1";

// --- Context para que Step1/2/3 usen los mismos datos ---


const initialState = {
  email: "",
  password: "",
  username: "",
  avatarFile: null, // File
  role: "" // "adoptar" | "dar"
};

// Reducer simple para actualizar campos
function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_AVATAR":
      return { ...state, avatarFile: action.file };
    case "RESET":
      return initialState;
    case "LOAD":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function RegisterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // Cargar desde sessionStorage al montar
  useEffect(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        // avatarFile no puede serializarse, lo ignoramos aquí
        dispatch({ type: "LOAD", payload: parsed });
      } catch (e) {
        console.error("No se pudo cargar registro:", e);
      }
    }
  }, []);

  // Persistir cambios (debounce simple opcional)
  useEffect(() => {
    // Guardamos solo campos serializables (no File)
    const toSave = {
      email: state.email,
      password: state.password,
      username: state.username,
      role: state.role
      // avatarFile no se guarda (puedes guardar preview base64 si quieres)
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [state.email, state.password, state.username, state.role]);

  const setField = (field, value) =>
    dispatch({ type: "SET_FIELD", field, value });

  const setAvatar = (file) =>
    dispatch({ type: "SET_AVATAR", file });

  const reset = () => {
    dispatch({ type: "RESET" });
    sessionStorage.removeItem(STORAGE_KEY);
  };

  // Función para hacer submit final (en el paso 3)
  const submitRegistration = async () => {
    // Validaciones rápidas
    if (!state.email || !state.password || !state.username || !state.role) {
      throw new Error("Faltan campos obligatorios");
    }

    // Crear FormData (para subir avatar)
    const form = new FormData();
    form.append("email", state.email);
    form.append("password", state.password);
    form.append("username", state.username);
    form.append("role", state.role);
    if (state.avatarFile instanceof File) {
      form.append("avatar", state.avatarFile);
    }

    // POST al backend
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
      method: "POST",
      body: form
      // NO pongas Content-Type: multipart/form-data (fetch lo asigna)
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || `Error ${res.status}`);
    }

    const data = await res.json();
    // Opcional: limpiar y redirigir
    reset();
    // navegar a login o dashboard según tu flujo
    navigate("/login");
    return data;
  };

  return (
    <RegisterContext.Provider value={{
      data: state,
      setField,
      setAvatar,
      submitRegistration
    }}>
      {children}
    </RegisterContext.Provider>
  );
}


