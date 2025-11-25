import "./App.css";
import Layout from "./shared/layout/Layout.jsx";
import { AnimalDetails } from "./features/animals/pages/AnimalDetails.jsx";
import { Home } from "./pages/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { Adoptions } from "./features/animals/pages/Adoptions.jsx";
import { RegisterSteps } from "./features/auth/pages/RegisterSteps.jsx";
import { CreateAdoption } from "./features/animals/pages/CreateAdoption.jsx";
import { Login } from "./features/auth/pages/Login";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import { Profile } from "./pages/Profile.jsx";
import { General } from "./features/user/pages/General.jsx";
import { UserAdoptions } from "./features/user/pages/UserAdoptions.jsx";
import { EditProfile } from "./features/user/pages/EditProfile.jsx";
import { ChangePassword } from "./features/user/pages/ChangePassword.jsx";

function App() {
  return (
    <Routes>
      {/* Rutas fuera de Layout */}
      <Route path="/register/*" element={<RegisterSteps />} />
      <Route path="/login" element={<Login />} />

      {/* Rutas con Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/animals/:id" element={<AnimalDetails />} />
        <Route path="/adoptions" element={<Adoptions />} />
        <Route path="/adoptions/create" element={<CreateAdoption />} />
      </Route>

      <Route path="/user" element={<Profile />}>
        <Route index element={<Navigate to="/user/general" />} />
        <Route path="general" element={<General />} />
        <Route path="adoptions" element={<UserAdoptions />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="password" element={<ChangePassword />} />
      </Route>

      {/* Redirección por defecto si no hay match */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
