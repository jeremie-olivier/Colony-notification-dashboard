import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AdminPage } from "./pages/AdminPage";
import '@aws-amplify/ui-react/styles.css';


import { AmplifyProvider } from "@aws-amplify/ui-react";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <AmplifyProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/adminPage" element={<AdminPage />} />;
          <Route path="/userPage" element={<UserPage />} />;
        </Routes>
      </div>
    </AmplifyProvider>
  );
}

export default App;