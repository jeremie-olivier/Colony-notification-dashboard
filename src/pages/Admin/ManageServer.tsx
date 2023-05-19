import React from "react";
import { Link } from "react-router-dom";
import { ProfileBar } from "../../components/ProfileBar";

export const ManageServer = () => {
  return (
    <section>
      <div>
        <ProfileBar />
      </div>
      <div className="flex justify-center items-center mt-20 gap-24">
        <div className="border-solid border-2 border-slate-300 h-[200px] w-[350px] p-5">
          <div className="flex items-center mt-4">
            <Link to={`/AdminPage/colony/notificationstest`}>
              <div className="w-12 h-12">
                <p className="text-3xl font-bold ">Manage your notifications</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="border-solid border-2 border-slate-300 h-[200px] w-[350px] p-5">
          <div className="flex justify-center items-center mt-4 mb-4">
            <div className="flex justify-center items-center">
              <Link to="/manageUsers/colony/notificationstest">
                <p className="text-3xl font-bold ">Manage your users</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
