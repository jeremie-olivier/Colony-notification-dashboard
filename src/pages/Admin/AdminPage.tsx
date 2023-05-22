import { useState, useEffect } from "react";
import { getNotificationSubscription } from "../../api/getNotificationSubscription";
import { Colony, NotificationSubscription } from "../../API";
import { getColonyName } from "../../api/getColonyName";
import { Link, useParams } from "react-router-dom";
import { deleteNotificationSubscription as deleteNotification } from "../../graphql/mutations";
import { ProfileBar } from "../../components/ProfileBar";
import { API, graphqlOperation } from "aws-amplify";

export const AdminPage = () => {
  const { colonyName } = useParams();
  const [notificationSubscriptions, setNotificationSubscriptions] = useState<
    NotificationSubscription[]
  >([]);
  const [listcolonyNames, setListColonyNames] = useState<Colony[]>([]);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    async function fetchNotificationSubscriptions() {
      if (!colonyName) return;
      const response = await getNotificationSubscription(colonyName);
      setNotificationSubscriptions(response);
      setNotificationCount(response.length);
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

  return (
    <section>
      <div>
        <ProfileBar />
      </div>
      <div className="font-bold text-2xl mt-7 ml-7">
        {listcolonyNames.map((colony) => {
          if (colony.name === colonyName) {
            return (
              <div key={colony.id}>
                <div>
                  {" "}
                  <p>
                    {colony.name}{" "}
                    <span className="font-semibold">
                      / Discord manager settings
                    </span>
                  </p>
                  <p className="">{notificationCount}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="m-6 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
            {notificationSubscriptions.map((notificationSubscription) => {
              if (notificationSubscription._deleted === null) {
                return (
                  <tr key={notificationSubscription.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {notificationSubscription.colony?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {
                        notificationSubscription.discordChannel?.discordServer
                          ?.name
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {notificationSubscription.createdAt}
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
                      {notificationSubscription.mentions?.items.map(
                        (m) => `${m?.user?.idDiscord} `
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {notificationSubscription.hits?.items.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex space-x-3">
                      <Link
                        to={`/EditingPost/${notificationSubscription.id}/${notificationSubscription._version}`}
                      >
                        <button className="rounded-md bg-[#5765F2] text-white p-2">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="rounded-md text-white bg-red-600 p-2"
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
        <Link to="/CreatingPost">
          <button className="rounded-md bg-[#5765F2] text-white p-3 m-8">
            Create new subscription
          </button>
        </Link>
      </div>
    </section>
  );
};
