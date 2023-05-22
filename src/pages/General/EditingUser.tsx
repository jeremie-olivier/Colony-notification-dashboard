import { ProfileBar } from "../../components/ProfileBar";
import { UpdateUser } from "../../components/UpdateUser";
import { useLocation } from "react-router-dom";

export const EditingUser = () => {
  let { state } = useLocation();

  return (
    <section>
      <div>
        <ProfileBar />
      </div>
      <div>
        <UpdateUser user={state.user} />
      </div>
    </section>
  );
};
