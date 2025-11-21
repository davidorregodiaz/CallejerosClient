// RegisterSteps.jsx
import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext} from "../context/RegisterContext";
import { useAuth } from "../../auth/hooks/useAuth";


const STORAGE_KEY = "register_data_v1";

// --- Context para que Step1/2/3 usen los mismos datos ---

const initialState = {
  email: "",
  password: "",
  username: "",
  avatarFile: null, // File
  role: "", // "adoptar" | "dar"
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
  const { register } = useAuth();
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
      role: state.role,
      // avatarFile no se guarda (puedes guardar preview base64 si quieres)
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [state.email, state.password, state.username, state.role]);

  const setField = (field, value) =>
    dispatch({ type: "SET_FIELD", field, value });

  const setAvatar = (file) => dispatch({ type: "SET_AVATAR", file });

  const reset = () => {
    dispatch({ type: "RESET" });
    sessionStorage.removeItem(STORAGE_KEY);
  };

  const submitRegistration = async () => {
    if (!state.email || !state.password || !state.username || !state.role) {
      throw new Error("Faltan campos obligatorios");
    }

    const form = new FormData();
    form.append("email", state.email);
    form.append("password", state.password);
    form.append("username", state.username);
    form.append("role", state.role);
    if (state.avatarFile instanceof File) {
      form.append("avatar", state.avatarFile);
    }

    await register(form);
    reset();
    navigate("/");
  };

  return (
    <RegisterContext.Provider
      value={{
        data: state,
        setField,
        setAvatar,
        submitRegistration,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
