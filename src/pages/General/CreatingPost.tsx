import { useState } from "react";

import { ProfileBar } from "../../components/ProfileBar";
import { DomainForm } from "../../components/DomainForm";
import { DiscordChannelForm } from "../../components/DiscordChannelForm";
import { MentionForm } from "../../components/MentionForm";
import { createNotificationSubscriptionInput } from "../../api/createNotificationSubs";
import { ColonyEventTypeForm } from "../../components/ColonyEventTypeForm";

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
      <ProfileBar />
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
          <button
            className="mt-10 bg-black text-white"
            onClick={handleSaveButtonClick}
          >
            SAVE
          </button>
        </div>
      </div>
    </section>
  );
};
