import { useState, useEffect } from 'react';
import { getNotificationSubscription } from '../../api/getNotificationSubscription';
import { NotificationSubscription } from '../../API';
import { Link } from 'react-router-dom';

import { ProfileBar } from '../../components/ProfileBar';



export const AdminPage = ({ colonyName = "notificationstest" }) => {
    const [notificationSubscriptions, setNotificationSubscriptions] = useState<NotificationSubscription[]>([]);

    useEffect(() => {
        async function fetchNotificationSubscriptions() {
            const response = await getNotificationSubscription("notificationstest");
            debugger
            setNotificationSubscriptions(response);
        }
        fetchNotificationSubscriptions();
    }, [colonyName]);

    return (
    <section>
        <div>
            <ProfileBar />
        </div>
        <div className='font-bold text-2xl mt-7 ml-7'>
        {notificationSubscriptions.map((notificationSubscription) => (
            <div key={notificationSubscription.id}>
            <div>{notificationSubscription.discordChannel?.discordServer?.name} / Discord manager settings</div>
            </div>  
        ))}
        </div>
        <div className="m-6 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-indigo-300 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
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
                    {notificationSubscriptions.map((notificationSubscription) => (
                        <tr key={notificationSubscription.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.discordChannel?.discordServer?.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.createdAt}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.author?.idDiscord}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.colonyEventType?.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.domain?.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">@{notificationSubscription.discordChannel?.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.mentions?.items.map(m => `${m?.user?.idDiscord} `)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.hits?.items.length}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex space-x-3">
                                <Link to="/EditingPost">
                                    <button className="rounded-md bg-[#5765F2] text-white p-2">
                                         Edit
                                     </button>
                                </Link>
                                <button className="rounded-md text-white bg-red-600 p-2">Delete</button>
                            </td>
                        </tr>
                    ))}
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
    )
}
