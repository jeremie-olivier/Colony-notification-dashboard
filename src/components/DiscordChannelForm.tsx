import { ChangeEvent, useState, useEffect, Dispatch, SetStateAction } from "react";
import { getDiscordChannelForm } from '../api/getDiscordChannelForm'

interface DiscordChannelFormProps {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}


export const DiscordChannelForm = ({ selectedOption, setSelectedOption }: DiscordChannelFormProps) => {
  const [getDiscordChannel, setGetDiscordChannel] = useState<any[]>([]);


  useEffect(() => {
    async function fetchgetDomain() {
      const response = await getDiscordChannelForm("notificationstest");
      setGetDiscordChannel(response);
    }
    fetchgetDomain();
  }, []);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mx-4 mt-5">
      <div className="mb-2">
        <label htmlFor="select2">Discord Channel </label>
      </div>
      <div className="form-group border-2 border-gray-400 rounded-md p-2">
        <select value={selectedOption} onChange={onChange} className="form-control">
          <option value="" defaultValue="true">
            Select a Discord Channel
          </option>
          {getDiscordChannel.map((discordChannel: any) => (
            <option value={discordChannel.id} key={discordChannel.id}>
              {discordChannel.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};