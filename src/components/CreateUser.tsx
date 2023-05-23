import { ChangeEvent, useState } from "react";
import { createUserInput } from "../api/createUser";
import { Link } from "react-router-dom";

export const CreateUser = () => {
  const [idDiscord, setIdDiscord] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const handleCreateUser = async () => {
    try {
      await createUserInput(idDiscord, walletAddress);
    } catch (error) {
      console.error(error);
    }
  };

  const handleIdDiscordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIdDiscord(e.target.value);
  };

  const handleWalletAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  return (
    <div className="">
      <div className="mb-5 p-3 border border-solid border-gray-300 rounded-md">
        <label htmlFor="idDiscord" className="mr-2">
          ID Discord:
        </label>
        <input
          type="text"
          id="idDiscord"
          value={idDiscord}
          onChange={handleIdDiscordChange}
          className="outline-none"
        />
      </div>
      <div className="mb-5 p-3 border border-solid border-gray-300 rounded-md">
        <label htmlFor="walletAddress" className="mr-2">
          Wallet Address:
        </label>
        <input
          type="text"
          id="walletAddress"
          value={walletAddress}
          onChange={handleWalletAddressChange}
          className="outline-none"
        />
      </div>
      <div className="flex justify-center bg-[#41AE9F] hover:bg-[#308176] rounded-md text-white font-bold p-2">
        <Link to="../list">
          <button onClick={handleCreateUser}>Create User</button>
        </Link>
      </div>
    </div>
  );
};
