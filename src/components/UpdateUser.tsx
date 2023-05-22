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
    <div>
      <div>
        <label htmlFor="idDiscord">ID Discord:</label>
        <input
          type="text"
          id="idDiscord"
          value={idDiscord}
        
          onChange={handleIdDiscordChange}
        />
      </div>
      <div>
        <label htmlFor="walletAddress">Wallet Address:</label>
        <input
          type="text"
          id="walletAddress"
          value={walletAddress}
          onChange={handleWalletAddressChange}
        />
      </div>
      <Link to="/manageUsers">
      <button onClick={handleUpdateUser}>Update User</button>
      </Link>
    </div>
  );
};
