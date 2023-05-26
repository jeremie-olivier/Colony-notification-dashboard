import { useState } from "react";
import { DomainForm } from "../../components/DomainForm";
import { DiscordChannelForm } from "../../components/DiscordChannelForm";
import { ColonyEventTypeForm } from "../../components/ColonyEventTypeForm";
import { updateNotificationSubscriptionInput } from "../../api/updateNotificationSubs";
import { ColonyForm } from "../../components/ColonyForm";
import { Link, useLocation, useParams } from "react-router-dom";
import { MentionForm } from "../../components/MentionForm";

export const EditingPost = () => {
  const location = useLocation();
  const notificationSubscription = location.state.notificationSubscription;
  //const { notificationSubscriptionId } = useParams();
  const { version } = useParams();
  const [domainOption, setDomainOption] = useState("");
  const [discordChannelOption, setDiscordChannelOption] = useState("");
  const [mentionUserOptions, setMentionUserOptions] = useState<string[]>([]);
  const [mentionRoleOption, setMentionRoleOption] = useState<string[]>([]);
  const [colonyEventTypeOption, setColonyEventTypeOption] = useState("");
  const [colonyOption, setColonyOption] = useState("");
  const [discordServerOption, setDiscordServerOption] = useState("");

  
  const handleUpdateButtonClick = async () => {
    try {
      await updateNotificationSubscriptionInput(
        notificationSubscription.id,
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


  const mentionsUserFilter = 
    notificationSubscription.mentions.items.filter((m:any) => m.user != null )

  

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
          <div className="">
            <MentionForm
              selectedUserOptions={mentionsUserFilter}
              setSelectedUserOptions={setMentionUserOptions}
              selectedRoleOptions={notificationSubscription}
              setSelectedRoleOptions={setMentionRoleOption}
              discordServerName={discordServerOption}
              
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
