import React from "react";
import { ProfileBar } from "../../components/ProfileBar";
import { CreateUser } from "../../components/CreateUser";

export const CreatingUser = () => {
  return (
    <section>
      <div>
        <ProfileBar />
      </div>
      <div>
        <CreateUser />
      </div>
    </section>
  );
};
