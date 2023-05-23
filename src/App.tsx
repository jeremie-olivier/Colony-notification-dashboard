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
import { AdminOptions } from "./pages/Admin/AdminOptions";

function App() {
  return (
    <AmplifyProvider>
      <div>
        <Routes>
          <Route path="/" element={<LoginDiscord />} />;
          <Route path="/discordAuth" element={<DiscordAuth />} />;


          <Route path="/loggedIn" element={<LoggedIn />} />;


          <Route
            path="admin"
            element={<ManageServer />}
          >
            <Route path="discordServer/:discordServerName"  >
              <Route index element={<AdminOptions />} />

              <Route path="notificiationsSubscription"  >
                <Route index path="list" element={<AdminPage />} />
                <Route
                  path="edit/:notificationSubscriptionId/:version"
                  element={<EditingPost />}
                />
                <Route path="create" element={<CreatingPost />} />;


              </Route>
              <Route
                path="users"
              >
                <Route
                  path="list"
                  element={<ManageUsers />}
                ></Route>
                <Route path="edit/:userinfo" element={<EditingUser />} />
                <Route path="create" element={<CreatingUser />} />;
              </Route>

            </Route>
          </Route>


          <Route path="/user" element={<UserPage />} />;



        </Routes>
      </div>
    </AmplifyProvider>
  );

}

export default App;
