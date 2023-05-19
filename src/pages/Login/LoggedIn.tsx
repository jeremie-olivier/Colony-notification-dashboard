import React from "react";
import { Link } from "react-router-dom";
import { ProfileBar } from "../../components/ProfileBar";


export const LoggedIn = () => {
  return (
    <section>
      <div>
        <ProfileBar />
      </div>
      <div className="m-9">
        <div className="flex justify-center">
          <div className="border-solid border-2 border-slate-300 h-[200px] w-[800px] p-2">
            <p className="text-3xl font-bold ">
              Configure your notification preferences
            </p>
            <p className="font-bold">within a Server using us</p>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full m-2">
                <img
                  src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-4xl font-bold m-6">
          Discord manager ?
        </div>

        <div className="flex justify-center items-center mt-7 gap-24">
          <div className="border-solid border-2 border-slate-300 h-[200px] w-[350px] p-5">
            <p className="text-3xl font-bold ">Server you manage</p>
            <div className="flex items-center mt-4">
            <Link to={`/AdminPage/colony/notificationstest`}>
              <div className="w-12 h-12 bg-gray-300 rounded-full m-2">
                <img
                  src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png"
                  alt=""
                />
              </div>
            </Link>
            </div>
          </div>

          <div className="border-solid border-2 border-slate-300 h-[200px] w-[350px] p-5">
            <div className="flex justify-center items-center mt-2 mb-4">
              <div className="w-12 h-12 bg-blue-300 rounded-full">
                <p className="flex justify-center items-center font-bold text-white text-4xl">
                  +
                </p>
              </div>
            </div>
            <p className="text-3xl font-bold ">Add this bot into your server</p>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Link to="/">
            <button className="rounded-md bg-[#41AE9F] text-white p-3 m-8 font-bold">
              Or view all Discord server in one view
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
