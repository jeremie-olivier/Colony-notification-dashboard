import { ChangeEvent, useState } from "react";
import { updateUserInput } from "../api/updateUserInput";


export const UpdateUser = () => {
  const [idDiscord, setIdDiscord] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const handleUpdateUser = async () => {
    try {
      await updateUserInput(idDiscord, walletAddress);

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
      <button onClick={handleUpdateUser}>Create User</button>
    </div>
  );
};
