
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { getDiscordServer } from '../api/getDiscordServer';

type User = {
    name: string,
    avatar: string
}

export const MentionUser = (props: any) => {

    const [user, setUser] = useState<User | null>(null)


    useEffect(() => {
        getUsersAndRoles(props.discordServerid);

        async function getUsersAndRoles(discordServerId: string) {
            // get serverId
            let discord = await getDiscordServer(discordServerId);
            console.log("response", discord)


            let userResponse = await fetch(`http://localhost:9000/guild/${discord.idDiscord}/user/${props.userId}`)
            let user: User = await userResponse.json()
            setUser(user)
            console.log(user)
        }



    }, [])


    if (!user) return <div></div>
    return (
        <div className='p-1'>
            <img src={user.avatar} alt="Avatar" className="inline-block h-6 w-6 rounded-full " />
            <span className="p-2">{user.name}</span>
        </div>
    )

}




