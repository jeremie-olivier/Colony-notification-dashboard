import {ChangeEvent, useState, useEffect, Dispatch, SetStateAction,} from "react";
import { getColonyEventTypeForm } from "../api/getColonyEventTypeForm";

interface ColonyEventTypeFormProps {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

export const ColonyEventTypeForm = ({
  selectedOption,
  setSelectedOption,
}: ColonyEventTypeFormProps) => {
  const [getEventTypeForm, setEventTypeForm] = useState<any[]>([]);

  useEffect(() => {
    async function fetchgetColonyEventType() {
      const response = await getColonyEventTypeForm("notificationstest");
      setEventTypeForm(response);
    }
    fetchgetColonyEventType();
  }, []);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mt-2">

      <div className="flex flex-row form-group border-2 border-gray-400 rounded-md p-2">
        <select
          value={selectedOption}
          onChange={onChange}
          className="form-control"
        >
          <option value="" defaultValue="true">
            Please select an event type 
          </option>
          {getEventTypeForm.map((colonyEventType: any) => (
            <option value={colonyEventType.id} key={colonyEventType.id}>
              {colonyEventType.type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
