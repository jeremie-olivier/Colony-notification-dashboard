export async function getRoleByGuildId(guildId: string) {
  return [
    {
      role: "admin",
    },
    {
      role: "streamer",
    },
    {
      role: "dev",
    },
    {
      role: "member",
    },
    {
      role: "noob",
    },
  ];
}
