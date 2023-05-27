import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDiscordServer } from "../api/getDiscordServer";

export const MentionRole = (props: any) => {
  type Role = {
    name: string;
    idDiscord: string;
  };

  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    getRole(props.discordServerid);

    async function getRole(discordServerId: string) {
      // get serverId
      let discord = await getDiscordServer(discordServerId);
      console.log("response", discord);

      let roleResponse = await fetch(
        `http://localhost:9000/guild/${discord.idDiscord}/role/${props.roleId}`
      );
      let role: Role = await roleResponse.json();
      setRole(role);
    }
  }, []);

  if (!role) return <div></div>;
  return (
    <div className="p-1">
      <span className="font-bold pl-1 pr-2 justify-center text-lg"> @</span>
      <span className="pl-2">{role.name}</span>
    </div>
  );
};
