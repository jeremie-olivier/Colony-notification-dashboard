import React from "react";
import { Routes, Route } from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';
import { AmplifyProvider } from "@aws-amplify/ui-react";

import { AdminPage } from "./pages/Admin/AdminPage";
import { UserPage } from "./pages/User/UserPage";
import { LoginDiscord } from "./pages/LoginDiscord";
import { DiscordAuth } from "./pages/Login/DiscordAuth";
import { CreatingPost } from "./pages/General/CreatingPost";
import { EditingPost } from "./pages/General/EditingPost";
import { LoggedIn } from "./pages/Login/LoggedIn";


function App() {
  return (
    <AmplifyProvider>
      <div>
        <Routes>
          <Route path="/" element={<LoginDiscord />} />;
          <Route path="/discordAuth" element={<DiscordAuth />} />;
          <Route path="/adminPage" element={<AdminPage />} />;
          <Route path="/userPage" element={<UserPage />} />;
          <Route path="/creatingPost" element={<CreatingPost />} />;
          <Route path="/editingPost" element={<EditingPost  />} />;
          <Route path="/loggedIn" element={<LoggedIn />} />;
        </Routes>
      </div>
    </AmplifyProvider>
  );
}

export default App;