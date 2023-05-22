import { Link, useParams } from "react-router-dom";

import { ProfileBar } from "../../components/ProfileBar";

import { useState, useEffect } from "react";
import { getColonyName } from "../../api/getColonyName";
import { Colony, ListUsersQuery } from "../../API";
import { getUserColony } from "../../api/getUserInfo";

export const ManageUsers = () => {
  const { colonyName } = useParams();
  const [listcolonyNames, setListColonyNames] = useState<Colony[]>([]);
  const [userCount, setUserCount] = useState(0);
  const [userList, setUserList] = useState<ListUsersQuery[]>([]);

  useEffect(() => {
    async function fetchUserList() {
      if (!colonyName) return;
      const response = await getUserColony(colonyName);
      setUserList(response);
      setUserCount(response.length);
    }
    async function fetchColonyNames() {
      if (!colonyName) return;
      const response = await getColonyName(colonyName);
      setListColonyNames(response);
    }
    fetchUserList();
    fetchColonyNames();
  }, [colonyName]);

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
                      / User manager settings
                    </span>
                  </p>
                  <p className="">Total user : {userCount}</p>
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
                Discord Id
              </th>
              <th scope="col" className="px-6 py-3">
                Wallet Adress
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: any) => {
              if (user._deleted === null) {
                return (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.idDiscord}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.walletAddress}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex space-x-3">
                      <Link to={`/EditingUser/${user.id}`} state={{user}} >
                        <button className="rounded-md bg-[#5765F2] text-white p-2">
                          Edit
                        </button>
                      </Link>

                      <button className="rounded-md text-white bg-red-600 p-2">
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
        <Link to="/creatingUser">
          <button className="rounded-md bg-[#5765F2] text-white p-3 m-8">
            Create new user
          </button>
        </Link>
      </div>
    </section>
  );
};
