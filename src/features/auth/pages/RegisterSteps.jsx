import { Outlet, Navigate, Routes, Route } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import {RegisterProvider} from "./RegisterProvider";
// import { Step3 } from "./Step3";

export function RegisterSteps() {
  return (
    <RegisterProvider>
      <Routes>
        <Route index element={<Navigate to="step1" />} />
        <Route path="/" element={<RegisterLayout />}>
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          {/* <Route path="step3" element={<Step3 />} /> */}
        </Route>
      </Routes>
    </RegisterProvider>
  );
}

// Layout de Register que mantiene el Outlet
function RegisterLayout() {
  return (
    <div className="max-w-lg mx-auto py-10">
      <Outlet />
    </div>
  );
}
