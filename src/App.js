import React from "react";
import Login from "./pages/freelance/Login";
import LoginginVerification from "./pages/freelance/LoginginVerification";
import Resetpassword from "./pages/freelance/Resetpassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "./pages/profil/Profil";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/loginginVerification" element={<LoginginVerification />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/profil" element={<Profil />} />

          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
