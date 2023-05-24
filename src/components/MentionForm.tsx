import {  useState, useEffect, Dispatch, SetStateAction } from "react";
import { getUsersByGuildId } from "../api/getDiscordUsers";
import { getRoleByGuildId } from "../api/getDiscordRoles";
import Select, { OptionProps, components } from 'react-select'




interface MentionFormProps {
  selectedUserOptions: string[];
  setSelectedUserOptions: Dispatch<SetStateAction<string[]>>;
  selectedRoleOptions: string[]
  setSelectedRoleOptions: Dispatch<SetStateAction<string[]>>;
}

export const MentionForm = ({
  selectedUserOptions,
  setSelectedUserOptions,
  selectedRoleOptions,
  setSelectedRoleOptions
}: MentionFormProps) => {
  const [users, setUsers] = useState<{ name: string; avatar_url: string }[]>([]);
  const [roles, setRoles] = useState<{ role: string} []>([]);

  useEffect(() => {
    const fetchDiscordUserandRoles = async () => {
      const fetchedUsers = await getUsersByGuildId("1066783105752506440");
      const fetchedRoles = await getRoleByGuildId("1066783105752506440");
      const userNames = fetchedUsers
      const roleNames = fetchedRoles
      setUsers(userNames);
      setRoles(roleNames);
    };
    fetchDiscordUserandRoles();
  }, []);

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
        value={selectedUserOptions.map((user) => ({ value: user, label: user, avatarUrl: user }))}
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
