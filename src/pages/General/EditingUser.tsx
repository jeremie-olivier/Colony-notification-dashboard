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
      <div className="flex justify-center mt-40">
        <UpdateUser user={state.user} />
      </div>
    </section>
  );
};
