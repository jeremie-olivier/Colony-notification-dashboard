import { ChangeEvent, useState } from "react";
import { updateUserInput } from "../api/updateUserInput";
import { Link } from "react-router-dom";




export const UpdateUser = (user: any) => {
  const [idDiscord, setIdDiscord] = useState(user.user.idDiscord || "");
  const [walletAddress, setWalletAddress] = useState(user.user.walletAddress || "");
  const [userId, ] = useState(user.user.id || "")
  const [version, ] = useState(user.user._version || "")

  const handleUpdateUser = async () => {
    try {
      await updateUserInput(idDiscord, walletAddress, userId, version);

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
        <label htmlFor="idDiscord" className="mr-2">ID Discord:</label>
        <input
          type="text"
          id="idDiscord"
          value={idDiscord}
          onChange={handleIdDiscordChange}
          className="outline-none"
        />
      </div>
      <div className="mb-5 p-3 border border-solid border-gray-300 rounded-md">
        <label htmlFor="walletAddress" className="mr-2">Wallet Address:</label>
        <input
          type="text"
          id="walletAddress"
          value={walletAddress}
          onChange={handleWalletAddressChange}
          className="outline-none"
        />
      </div>
      <div className="flex justify-center bg-[#41AE9F] hover:bg-[#308176] rounded-md text-white font-bold p-2">
      <Link to="/manageUsers">
      <button onClick={handleUpdateUser}>Update User</button>
      </Link>
      </div>
    </div>
  );
};
