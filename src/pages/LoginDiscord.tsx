import React from "react";

import "@aws-amplify/ui-react/styles.css";
import { Link } from "react-router-dom";

export const LoginDiscord = () => {
  return (
    <section className="m-6">
      <div>
        <p className="font-bold text-6xl">Colony Notification Center</p>
      </div>
      <div className="flex flex-col m-56 p-6">
        <p className="flex justify-center font-bold text-3xl">
          Login to setup your Notifications preferences
        </p>
        <p className="flex justify-center text-xl">
          Never miss a vote, payment or token mint on your Colonies anymore!
        </p>
        <div className="flex justify-center">
          <Link to="/DiscordAuth">
            <button className="rounded-md bg-[#5765F2] text-white font-bold hover:bg-[#3B45A0] p-5 m-10">
              Log In with discord
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
