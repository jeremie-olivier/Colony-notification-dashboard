import React from "react";
import { Routes, Route } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";

import { AdminPage } from "./pages/Admin/AdminPage";
import { UserPage } from "./pages/User/UserPage";
import { LoginDiscord } from "./pages/LoginDiscord";
import { DiscordAuth } from "./pages/Login/DiscordAuth";
import { CreatingPost } from "./pages/General/CreatingPost";
import { EditingPost } from "./pages/General/EditingPost";
import { LoggedIn } from "./pages/Login/LoggedIn";
import { ManageServer } from "./pages/Admin/ManageServer";
import { ManageUsers } from "./pages/Admin/ManageUsers";
import { CreatingUser } from "./pages/General/CreatingUser";
import { EditingUser } from "./pages/General/EditingUser";

function App() {
  return (
    <AmplifyProvider>
      <div>
        <Routes>
          <Route path="/" element={<LoginDiscord />} />;
          <Route path="/discordAuth" element={<DiscordAuth />} />;
          <Route path="/adminPage/colony/:colonyName" element={<AdminPage />} />
          ;
          <Route path="/userPage" element={<UserPage />} />;
          <Route path="/creatingPost" element={<CreatingPost />} />;
          <Route
            path="/editingPost/:notificationSubscriptionId/:version"
            element={<EditingPost />}
          />
          ;
          <Route path="/loggedIn" element={<LoggedIn />} />;
          <Route
            path="/manageServer/colony/:colonyName"
            element={<ManageServer />}
          />
          ;
          <Route
            path="/manageUsers/colony/:colonyName"
            element={<ManageUsers />}
          />
          ;
          <Route path="/creatingUser" element={<CreatingUser />} />;
          <Route path="/editingUser/:userinfo" element={<EditingUser />} />
        </Routes>
      </div>
    </AmplifyProvider>
  );
}

export default App;
