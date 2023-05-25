import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Select, { OptionProps, components } from 'react-select'
import { getDiscordServer } from "../api/getDiscordServer";
import { useParams } from "react-router-dom";




interface MentionFormProps {
  selectedUserOptions: string[];
  setSelectedUserOptions: Dispatch<SetStateAction<string[]>>;
  selectedRoleOptions: string[]
  setSelectedRoleOptions: Dispatch<SetStateAction<string[]>>;
  discordServerName: string;
}

export const MentionForm = ({
  selectedUserOptions,
  setSelectedUserOptions,
  selectedRoleOptions,
  setSelectedRoleOptions,
}: MentionFormProps) => {
  const { discordServerName } = useParams();
  const [users, setUsers] = useState<{ name: string; avatar_url: string }[]>([]);
  const [roles, setRoles] = useState<{ role: string }[]>([]);

  //créer fonction qui va transformer le name en id discord en contactant l'api amplify avec méthode graphql

  useEffect(() => {
    const fetchDiscordUser = async () => {
      try {
        const discordServer = await getDiscordServer(discordServerName);


        const usersResponse = await fetch(`http://localhost:9000/guild/${discordServer.idDiscord}/users`)
        const users = await usersResponse.json()
        setUsers(users)


        const rolesResponse = await fetch(`http://localhost:9000/guild/${discordServer.idDiscord}/roles`); // Remplacez "api/userRoles" par votre point de terminaison approprié
        const roles = await rolesResponse.json()
        setRoles(roles)

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDiscordUser();
  }, [discordServerName]);



  const onUserChange = (selectedOptions: any) => {
    const userNames = selectedOptions.map((option: any) => option.value);
    setSelectedUserOptions(userNames);
  };

  const onRoleChange = (selectedOptions: any) => {
    const roleNames = selectedOptions.map((option: any) => option.value);
    setSelectedRoleOptions(roleNames);
  };

  let userOptions;
  let roleOptions

  const selectOptionWithAvatar = (props: OptionProps<{ value: string; label: string; avatarUrl: string }>) => {
    const { label, data } = props;
    const avatarUrl = data?.avatarUrl;

    return (
      <components.Option {...props}>
        <div>
          <img src={avatarUrl} alt="Avatar" className="inline-block h-6 w-6 rounded-full " />
          <span className="p-4">{label}</span>
        </div>
      </components.Option>
    );
  };

  if (!users) return <div>Loading</div>
  return (
    <div className="boder-solid border-2 border-gray-300 rounded-md"> Mention
      <div className="mx-4 mt-5">
        <label htmlFor="users">Select Users:</label>

        <Select
          components={{ Option: selectOptionWithAvatar }}
          isMulti

          options={users.map((user: any) => ({ value: user.idDiscord, label: user.name, avatarUrl: user.avatar }))}
          value={userOptions}
          onChange={onUserChange}
        />

        <label htmlFor="roles">Select Roles:</label>
        <Select
          isMulti
          value={roleOptions}
          options={roles.map((role: any) => ({ value: role.idDiscord, label: role.name }))}
          onChange={onRoleChange}
        />

      </div>
    </div>
  );
};
