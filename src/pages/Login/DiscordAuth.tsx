import React from 'react'
import { Link } from 'react-router-dom'

export const DiscordAuth = () => {
  return (
  <section>
    <div className="flex justify-center mt-5">
      <img src="https://media.discordapp.net/attachments/1075339427427127316/1105494453554262117/image.png" alt="" />
    </div>
    <div className='flex justify-center'>
       <Link to="/LoggedIn">
          <button className="rounded-md bg-[#5765F2] hover:bg-[#3B45A0] text-white p-3 m-8">
            Authorize
          </button>
        </Link>
    </div>
  </section>
  )
}
