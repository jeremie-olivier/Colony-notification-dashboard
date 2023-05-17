import { useState, useEffect } from "react";

import { ProfileBar } from "../../components/ProfileBar";
import { DomainForm } from "../../components/DomainForm";
import { DiscordChannelForm } from "../../components/DiscordChannelForm";
import { ColonyEventTypeForm } from "../../components/ColonyEventTypeForm";
import { updateNotificationSubscriptionInput } from "../../api/updateNotificationSubs";
import { Link, useParams } from "react-router-dom";
import { ColonyForm } from "../../components/ColonyForm";

export const EditingPost = () => {
  const { notificationSubscriptionId } = useParams();
  const [domainOption, setDomainOption] = useState("");
  const [discordChannelOption, setDiscordChannelOption] = useState("");
  const [colonyEventTypeOption, setColonyEventTypeOption] = useState("");
  const [colonyOption, setColonyOption] = useState("");

  const handleUpdateButtonClick = async () => {
    try {
      await updateNotificationSubscriptionInput(
        notificationSubscriptionId,
        domainOption,
        discordChannelOption,
        colonyEventTypeOption,
        colonyOption
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
            <ColonyForm
              selectedOption={colonyOption}
              setSelectedOption={setColonyOption}
            />
          </div>
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
          <div>
            <ColonyEventTypeForm
              selectedOption={colonyEventTypeOption}
              setSelectedOption={setColonyEventTypeOption}
            />
          </div>
          {/* <Link to="/AdminPage"> */}
          <button
            className="mt-10 bg-black text-white"
            onClick={handleUpdateButtonClick}
          >
            Update
          </button>
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
};
