import { ChangeEvent, useState, useEffect, Dispatch, SetStateAction } from "react";
import { getMentionForm } from "../api/getMentionForm";

interface MentionFormProps {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

export const MentionForm = ({ selectedOption, setSelectedOption }: MentionFormProps) => {
  const [getMention, setGetMention] = useState<any[]>([]);


  useEffect(() => {
    async function fetchgetDomain() {
      const response = await getMentionForm("notificationstest");
      setGetMention(response);
    }
    fetchgetDomain();
  }, []);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mx-4 mt-5">
      <div className="mb-2">
        <label htmlFor="select2">Mentions </label>
      </div>
      <div className="form-group border-2 border-gray-400 rounded-md p-2">
        <select value={selectedOption} onChange={onChange} className="form-control">
          <option value="" defaultValue="true">
            Select a mention
          </option>
          {getMention.map((mention: any) => (
            <option value={mention.id} key={mention.id}>
              {mention.id}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};