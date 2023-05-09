import React from 'react';
import { Link } from 'react-router-dom';

export const ProfileBar = () => {
  return (
    <div className="flex p-8 bg-sky-900 text-white h-12 items-center justify-between">
      <div>
      <Link to="/">Disconnect</Link>
      </div>
      <div>
        Evelyn#7559
      </div>
    </div>
  )
}
