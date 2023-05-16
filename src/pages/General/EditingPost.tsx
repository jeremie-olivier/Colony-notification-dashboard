import { useState } from "react";

import { ProfileBar } from "../../components/ProfileBar";
import { DomainForm } from "../../components/DomainForm";
import { DiscordChannelForm } from "../../components/DiscordChannelForm";
import { MentionForm } from "../../components/MentionForm";
import { ColonyEventTypeForm } from "../../components/ColonyEventTypeForm";
import { updateNotificationSubscriptionInput } from "../../api/updateNotificationSubs";


export const EditingPost = () => {
  const [domainOption, setDomainOption] = useState("");
  const [discordChannelOption, setDiscordChannelOption] = useState("");
  const [mentionOption, setMentionOption] = useState("");
  const [colonyEventTypeOption, setColonyEventTypeOption] = useState("");

  const handleUpdateButtonClick = async () => {
    try {
      await updateNotificationSubscriptionInput(
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
          <div>
            <ColonyEventTypeForm
              selectedOption={colonyEventTypeOption}
              setSelectedOption={setColonyEventTypeOption}
            />
          </div>
          <button>Update</button>
        </div>
      </div>
    </section>
  );
};
