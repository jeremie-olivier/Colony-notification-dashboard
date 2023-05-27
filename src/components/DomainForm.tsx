import { ChangeEvent, useState, useEffect, Dispatch, SetStateAction } from "react";
import { getDomainForm } from "../api/getDomainForm";

interface DomainFormProps {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

export const DomainForm = ({ selectedOption, setSelectedOption }: DomainFormProps) => {
  const [getDomain, setGetDomain] = useState<any[]>([]);


  useEffect(() => {
    async function fetchgetDomain() {
      const response = await getDomainForm("notificationstest");
      setGetDomain(response);
    }
    fetchgetDomain();
  }, []);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mt-2">

    <div className="flex flex-row form-group border-2 border-gray-400 rounded-md p-2">
      <select value={selectedOption} onChange={onChange} className="form-control">
        <option value="" disabled>
          Choose a team
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
