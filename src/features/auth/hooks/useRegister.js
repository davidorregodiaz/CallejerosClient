import { useContext } from "react";
import { RegisterContext } from "../context/RegisterContext";

export const useRegister = () => {
  const ctx = useContext(RegisterContext);
  if (!ctx)
    throw new Error("useRegister must be used inside <RegisterProvider>");
  return ctx;
};