import { useState, useEffect } from "react";
import { DomainForm } from "../../components/DomainForm";
import { DiscordChannelForm } from "../../components/DiscordChannelForm";
import { MentionForm } from "../../components/MentionForm";
import {
  CreateNotifSubInput,
  createNotificationSubscriptionInput,
} from "../../api/createNotificationSubs";
import { ColonyEventTypeForm } from "../../components/ColonyEventTypeForm";
import { Link } from "react-router-dom";
import { getDiscordServer } from "../../api/getDiscordServer";

export const CreatingPost = () => {
  const [domainOption, setDomainOption] = useState("");
  const [discordChannelOption, setDiscordChannelOption] = useState("");
  const [mentionUserOptions, setMentionUserOptions] = useState<string[]>([]);
  const [mentionRoleOption, setMentionRoleOption] = useState<string[]>([]);
  const [colonyEventTypeOption, setColonyEventTypeOption] = useState("");
  const [discordServerOption, setDiscordServerOption] = useState("");

  useEffect(() => {
    const fetchDiscordServer = async () => {
      try {
        const discordServer = await getDiscordServer(discordServerOption);
        setDiscordServerOption(discordServer.name);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDiscordServer();
  }, [discordServerOption]);

  const handleSaveButtonClick = async () => {
    let notifsSubs: CreateNotifSubInput = {
      // colonyId: "",
      // authorId: "",
      domainId: domainOption,
      discordChannelId: discordChannelOption,
      colonyEventTypeId: colonyEventTypeOption,
      userMentionIds: mentionUserOptions,
      rolesMentionIds: mentionRoleOption,
    };

    try {
      await createNotificationSubscriptionInput(notifsSubs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="flex-col w-[800px] mt-10">
          {mentionRoleOption}
          {mentionUserOptions}
          <p className="text-sm font-medium text-gray-900 ">Teams :</p>
          <div className="mb-6">
            <DomainForm
              selectedOption={domainOption}
              setSelectedOption={setDomainOption}
            />
          </div>
          <p className="text-sm font-medium text-gray-900 ">
            Discord Channel :
          </p>
          <div className="mb-6">
            <DiscordChannelForm
              selectedOption={discordChannelOption}
              setSelectedOption={setDiscordChannelOption}
            />
          </div>
          <p className="text-sm font-medium text-gray-900 ">Mention :</p>
          <div className="mb-6">
            <MentionForm
              selectedUserOptions={mentionUserOptions}
              setSelectedUserOptions={setMentionUserOptions}
              selectedRoleOptions={mentionRoleOption}
              setSelectedRoleOptions={setMentionRoleOption}
              discordServerName={discordServerOption}
            />
          </div>
          <p className="text-sm font-medium text-gray-900 ">Event Type :</p>
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
