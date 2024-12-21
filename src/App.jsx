import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { Login } from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
         <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
