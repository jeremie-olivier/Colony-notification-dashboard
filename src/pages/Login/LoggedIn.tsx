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
          <div className="border-solid border-2 border-slate-300 md:h-[200px] md:w-[800px] p-5 rounded-md">
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

        <div className="flex justify-center text-4xl font-bold mt-10">
          Discord manager ?
        </div>

        <div className="flex justify-center items-center mt-7 gap-24">
          <div className="border-solid border-2 border-slate-300 sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[350px] p-5 rounded-md">
            <p className="text-3xl font-bold ">Server you manage</p>
            <div className="flex items-center mt-4">
              <Link to="/admin/discordServer/notificationstest">
                <div className="w-12 h-12 bg-gray-300 rounded-full m-2">
                  <img
                    src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="border-solid border-2 border-slate-300 sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[350px] p-5 rounded-md">
            <p className="text-3xl font-bold ">Add this bot into your server</p>
            <div className="flex justify-center items-center mt-2 mb-4">
              <div className="w-12 h-12 bg-blue-300 rounded-full">
                <div className="flex justify-center">

                <Link to="https://discord.com/api/oauth2/authorize?client_id=993467029317242891&permissions=8&scope=bot%20applications.commands">
                <button className="font-bold text-white text-4xl">
                  +
                </button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Link to="/">
            <button className="rounded-md bg-[#41AE9F] hover:bg-[#308176] text-white p-3 m-8 font-bold">
              Or view all Discord server in one view
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
