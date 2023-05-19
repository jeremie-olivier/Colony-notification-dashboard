import React from 'react'
import { ProfileBar } from "../../components/ProfileBar";
import { UpdateUser } from '../../components/UpdateUser';

export const EditingUser = () => {
  return (
    <section>
    <div>
      <ProfileBar />
    </div>
    <div>
      <UpdateUser />
    </div>

  
  </section>
  )
}
