import React from "react";

import { ProfileBar } from "../../components/ProfileBar";
import ColonyEventTypeCreateForm from "../../ui-components/ColonyEventTypeCreateForm";
import { DomainForm } from "../../components/DomainForm";
import { DiscordChannelForm } from "../../components/DiscordChannelForm";
import { MentionForm } from "../../components/MentionForm";

export const CreatingPost = () => {
  return (
    <section>
      <ProfileBar />
      <div className="flex justify-center">
        <div className="flex-col w-[800px]">
          <DomainForm />
          <DiscordChannelForm />
          <MentionForm />
          <ColonyEventTypeCreateForm></ColonyEventTypeCreateForm>
        </div>
      </div>
    </section>
  );
};
