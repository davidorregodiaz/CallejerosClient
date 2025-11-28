import { Outlet, Navigate, Routes, Route } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { RegisterProvider } from "./RegisterProvider";
import { SuccessRegistration } from "../../../shared/ui/SuccessRegistration";
import { UserRegistrationProgressBar } from "../components/UserRegistrationProgressBar";

export function RegisterSteps() {
  return (
    <RegisterProvider>
      <Routes>
        <Route index element={<Navigate to="step1" />} />
        <Route path="/" element={<RegisterLayout />}>
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="completed" element={<SuccessRegistration />} />
        </Route>
      </Routes>
    </RegisterProvider>
  );
}

// Layout de Register que mantiene el Outlet
function RegisterLayout() {
  return (
    <div className="max-w-lg mx-auto py-10 d-flex flex-col min-h-screen justify-center items-center">
      <UserRegistrationProgressBar />
      <Outlet />
    </div>
  );
}
