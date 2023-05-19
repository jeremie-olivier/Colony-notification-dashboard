import { ChangeEvent, useState } from "react";
import { createUserInput } from "../api/createUser";

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
  debugger
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
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};
