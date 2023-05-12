import React from "react";

import "@aws-amplify/ui-react/styles.css";
import { Link } from "react-router-dom";

export const LoginDiscord = () => {
  return (
    <section className="m-6">
      <div>
        <p className="font-bold text-2xl">Colony Notification Center</p>
      </div>
      <div className="flex flex-col m-20 p-6">
        <p className="flex justify-center font-bold text-xl">Login to setup your Notifications preferences</p>
        <p className="flex justify-center">Never miss a vote, payment or token mint on your Colonies anymore!</p>
      </div>
      <div className="flex justify-center">
        <Link to="/DiscordAuth">
          <button className="rounded-md bg-[#5765F2] text-white p-3 m-8">
            Log In with discord
          </button>
        </Link>
      </div>
    </section>
  );
};