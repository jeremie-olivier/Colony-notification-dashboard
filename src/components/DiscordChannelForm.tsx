import { ChangeEvent, useState, useEffect } from "react";
import { getDiscordChannelForm } from '../api/getDiscordChannelForm'

export const DiscordChannelForm = () => {
  const [getDomain, setGetDomain] = useState<any[]>([]);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    async function fetchgetDomain() {
      const response = await getDiscordChannelForm("notificationstest");
      setGetDomain(response);
    }
    fetchgetDomain();
  }, []);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setId(e.target.value);
  };

  return (
    <div className="mx-4 mt-5">
      <div className="mb-2">
        <label htmlFor="select2">Discord Channel </label>
      </div>
      <div className="form-group border-2 border-gray-400 rounded-md p-2">
        <select value={id} onChange={onChange} className="form-control">
          <option value="" disabled selected>
            Select a Discord Channel
          </option>
          {getDomain.map((domain: any) => (
            <option value={domain.id} key={domain.id}>
              {domain.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};