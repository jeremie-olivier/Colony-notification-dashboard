import React from "react";
import { Outlet } from "react-router-dom";
import { ProfileBar } from "../../components/ProfileBar";

export const ManageServer = () => {
  return (
    <section>
      <div>
        <ProfileBar />
      </div>
      <Outlet />

    </section>

  );
};
