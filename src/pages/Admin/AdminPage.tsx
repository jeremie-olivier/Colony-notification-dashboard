import { useState, useEffect } from "react";
import { getNotificationSubscription } from "../../api/getNotificationSubscription";
import { Colony, NotificationSubscription } from "../../API";
import { getColonyName } from "../../api/getColonyName";
import { Link, useParams } from "react-router-dom";
import { deleteNotificationSubscription as deleteNotification } from "../../graphql/mutations";

import { API, graphqlOperation } from "aws-amplify";
import { MentionRole } from "../../components/MentionRole";
import { MentionUser } from "../../components/MentionAvatar";


export const AdminPage = () => {
  const { discordServerName } = useParams();

  const [notificationSubscriptions, setNotificationSubscriptions] = useState<
    NotificationSubscription[]
  >([]);
  const [listcolonyNames, setListColonyNames] = useState<Colony[]>([]);
  const [notificationCount, setNotificationCount] = useState(0);

  // TODO : Change request from ColonyName to Discord Server
  let colonyName = discordServerName;


  useEffect(() => {
    async function fetchNotificationSubscriptions() {
      if (!colonyName) return;
      const response = await getNotificationSubscription(colonyName);
      const filteredSubscriptions = response.filter(
        (notificationSubscription: { _deleted: null }) =>
          notificationSubscription._deleted === null
      );
      setNotificationSubscriptions(filteredSubscriptions);
      setNotificationCount(filteredSubscriptions.length);
    }
    async function fetchColonyNames() {
      if (!colonyName) return;
      const response = await getColonyName(colonyName);
      setListColonyNames(response);
    }
    fetchNotificationSubscriptions();
    fetchColonyNames();
  }, [colonyName]);

  const Delete = async (notification: any) => {
    try {
      const input = { id: notification.id, _version: notification._version };
      await API.graphql(graphqlOperation(deleteNotification, { input }));

      const updatedSubscriptions = await getNotificationSubscription(
        "notificationstest"
      );
      setNotificationSubscriptions(updatedSubscriptions);
    } catch (error) {
      console.error(
        "Erreur lors de la suppression de la notification :",
        error
      );

      throw error;
    }
  };
  if (!colonyName) return <p>Error</p>;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <section>
      <div className="font-bold text-2xl mt-7 ml-7">
        {listcolonyNames.map((colony) => {
          if (colony.name === colonyName) {
            return (
              <div key={colony.id}>
                <div>
                  {" "}
                  <p>
                    <Link to={`/admin/discordServer/${colony.name}`}>
                      {colony.name}
                    </Link>
                    <span className="font-semibold">
                      / Discord manager settings
                    </span>
                  </p>
                  <p className="">Total notifications : {notificationCount}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="m-6 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-black">
          <thead className="text-xs text-gray-700 uppercase bg-indigo-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Colony
              </th>
              <th scope="col" className="px-6 py-3">
                Servers
              </th>
              <th scope="col" className="px-6 py-3">
                Created at
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Event Type
              </th>
              <th scope="col" className="px-6 py-3">
                Team
              </th>
              <th scope="col" className="px-6 py-3">
                Channel
              </th>
              <th scope="col" className="px-6 py-3">
                Mention
              </th>
              <th scope="col" className="px-6 py-3">
                Hits
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {notificationSubscriptions.map((notificationSubscription, index) => {
              if (notificationSubscription._deleted === null) {
                const rowClass = index % 2 === 0 ? 'bg-customColor1' : 'bg-customColor2';

    
                return (
                  <tr key={notificationSubscription.id} className={`${rowClass} `}>
                    <td className="px-6 py-4 whitespace-nowrap  ">
                      {notificationSubscription.colony?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {
                        notificationSubscription.discordChannel?.discordServer
                          ?.name
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatDate(notificationSubscription.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {notificationSubscription.author?.idDiscord}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {notificationSubscription.colonyEventType?.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {notificationSubscription.domain?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      @{notificationSubscription.discordChannel?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {notificationSubscription.mentions?.items.map((m) => {
                        console.log("mention", m);
                        if (!m) return "";
                        if (m.user)
                          return (
                            <MentionUser
                              key={m.id}
                              discordServerid={discordServerName}
                              userId={m.user.idDiscord}
                            />
                          );
                        return (
                          <MentionRole
                            key={m.id}
                            discordServerid={discordServerName}
                            roleId={m.idDiscordRole}
                          />
                        );
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {notificationSubscription.hits?.items.length}
                    </td>
                    <td className=" px-6 py-4 whitespace-nowrap  space-x-3 place-items-center ">
                      <Link
                        to={`../edit/${notificationSubscription.id}/${notificationSubscription._version}`}
                        state={{ notificationSubscription }}
                      >
                        <button className="rounded-md bg-[#5765F2] hover:bg-[#3B45A0] text-white p-2">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="rounded-md text-white bg-red-600 hover:bg-[#A81F1F] p-2"
                        onClick={() => Delete(notificationSubscription)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <Link to="../create">
          <button className="rounded-md bg-[#5765F2] hover:bg-[#3B45A0] text-white p-3 m-8">
            Create new subscription
          </button>
        </Link>
      </div>
    </section>
  );
};
