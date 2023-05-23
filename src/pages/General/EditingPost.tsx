import { useState } from "react";
import { ProfileBar } from "../../components/ProfileBar";
import { DomainForm } from "../../components/DomainForm";
import { DiscordChannelForm } from "../../components/DiscordChannelForm";
import { ColonyEventTypeForm } from "../../components/ColonyEventTypeForm";
import { updateNotificationSubscriptionInput } from "../../api/updateNotificationSubs";
import { ColonyForm } from "../../components/ColonyForm";
import { Link, useParams } from "react-router-dom";

export const EditingPost = () => {

  const { notificationSubscriptionId } = useParams();
  const { version } = useParams()
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
        colonyOption,
        version
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
          <Link to="../list">
            <button
              className="flex justify-center mt-10 text-white bg-[#41AE9F] hover:bg-[#308176] rounded-md font-bold p-3"
              onClick={handleUpdateButtonClick}
            >
              Update
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
