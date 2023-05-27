import {
  useState,
  useEffect,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { Colony } from "../API";
import { getColonyName } from "../api/getColonyName";

interface ColonyFormProps {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

export const ColonyForm = ({
  selectedOption,
  setSelectedOption,
}: ColonyFormProps) => {
  const [listcolonyNames, setListColonyNames] = useState<Colony[]>([]);

  useEffect(() => {
    async function fetchColonyNames() {
      const response = await getColonyName("notificationstest");
      setListColonyNames(response);
    }
    fetchColonyNames();
  }, []);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mt-2">

      <div className="form-group border-2 border-gray-400 rounded-md p-2">
        <select
          value={selectedOption}
          onChange={onChange}
          className="form-control"
        >
          <option value="" defaultValue="true">
            Select a Colony
          </option>
          {listcolonyNames.map((colony: any) => (
            <option value={colony.id} key={colony.id}>
              {colony.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
