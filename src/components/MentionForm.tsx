import {  useState, useEffect, Dispatch, SetStateAction } from "react";
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
  const [roles, setRoles] = useState<{ role: string} []>([]);

//créer fonction qui va transformer le name en id discord en contactant l'api amplify avec méthode graphql

  useEffect(() => {
    const fetchDiscordUser = async () => {
      try {
        const discordServer = await getDiscordServer(discordServerName);
        const users = await fetch(`http://localhost:9000/guild/${discordServer.idDiscord}/users`); // Remplacez "api/userRoles" par votre point de terminaison approprié
        console.log(users);
          if (users.ok) {
          const data = await users.json();
          const fetchedUsers = data.users;
          const userNames = fetchedUsers.map((user: any) => user.name);
          setUsers(userNames);
        } else {
          console.error('Error: ' + users.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchDiscordUser();
  }, [discordServerName]);

  useEffect(() => {
    const fetchDiscordRoles = async () => {
      try {
        const discordServer = await getDiscordServer(discordServerName);
        const response = await fetch(`http://localhost:9000/guild/${discordServer.idDiscord}/roles`); // Remplacez "api/userRoles" par votre point de terminaison approprié
        if (response.ok) {
          const data = await response.json();
          const fetchedRoles = data.roles;
          const roleNames = fetchedRoles.map((role: any) => role.role);
          setRoles(roleNames);
        } else {
          console.error('Error: ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchDiscordRoles();
    
  }, [discordServerName]);

  const onUserChange = (selectedOptions: any) => {
    const userNames = selectedOptions.map((option: any) => option.value);
    setSelectedUserOptions(userNames);
  };

  const onRoleChange = (selectedOptions: any) => {
    const roleNames = selectedOptions.map((option: any) => option.value);
    setSelectedRoleOptions(roleNames);
  };

  const userOptions = users.map((user) => ({
    value: user.name,
    label: user.name,
    avatarUrl: user.avatar_url

   
  }));

  const roleOptions = roles.map((role) => ({
    value: role.role,
    label: role.role
  }));

  const selectOptionWithAvatar = (props: OptionProps<{ value: string; label: string; avatarUrl: string }>) => {
    const { label, data } = props;
    const avatarUrl = data?.avatarUrl;

    return (
      <components.Option {...props}>
        <div>
          <img src={avatarUrl} alt="Avatar" />
          {label}
        </div>
      </components.Option>
    );
  };
  

  return (
    <div className="boder-solid border-2 border-gray-300 rounded-md"> Mention
    <div className="mx-4 mt-5">
      <label htmlFor="users">Select Users:</label>
      
        <Select
        components={{ Option : selectOptionWithAvatar}}
        isMulti
      
        options={userOptions}
        value={users.map((user: any) => ({ value: user.idDiscord, label: user.name, avatarUrl: user.avatar }))}
        onChange={onUserChange}
      />

<label htmlFor="roles">Select Roles:</label>
      <Select
        isMulti
        options={roleOptions}
        value={selectedRoleOptions.map((role) => ({ value: role, label: role }))}
        onChange={onRoleChange}
      />
      
    </div>
    </div>
  );
};
