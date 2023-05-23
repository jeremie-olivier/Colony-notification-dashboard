import { useState } from "react";

import { ProfileBar } from "../../components/ProfileBar";
import { DomainForm } from "../../components/DomainForm";
import { DiscordChannelForm } from "../../components/DiscordChannelForm";
import { MentionForm } from "../../components/MentionForm";
import { createNotificationSubscriptionInput } from "../../api/createNotificationSubs";
import { ColonyEventTypeForm } from "../../components/ColonyEventTypeForm";
import { Link } from "react-router-dom";


export const CreatingPost = () => {
  const [domainOption, setDomainOption] = useState("");
  const [discordChannelOption, setDiscordChannelOption] = useState("");
  const [mentionOption, setMentionOption] = useState("");
  const [colonyEventTypeOption, setColonyEventTypeOption] = useState("");


  const handleSaveButtonClick = async () => {

    try {
      await createNotificationSubscriptionInput(
        domainOption,
        discordChannelOption,
        mentionOption,
        colonyEventTypeOption
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="flex-col w-[800px]">
          <div className="">
            <DomainForm
              selectedOption={domainOption}
              setSelectedOption={setDomainOption}
            />
          </div>
          <div className="">
            <DiscordChannelForm
              selectedOption={discordChannelOption}
              setSelectedOption={setDiscordChannelOption}
            />
          </div>
          <div className="">
            <MentionForm
              selectedOption={mentionOption}
              setSelectedOption={setMentionOption}
            />
          </div>
          <ColonyEventTypeForm
            selectedOption={colonyEventTypeOption}
            setSelectedOption={setColonyEventTypeOption}
          />
          <Link to="../list">
            <button
              className="flex justify-center mt-10 text-white bg-[#41AE9F] hover:bg-[#308176] rounded-md font-bold p-3"
              onClick={handleSaveButtonClick}
            >
              Save
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};
