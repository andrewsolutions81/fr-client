import React, { useState } from 'react'
import { apiUsers } from '../../api/apiUsers';

const UsersDisplay = () => {
  const [res, setRes] = useState({})

  const handleFetchUsers =  async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    apiUsers()
  };

  return (
    <section>UsersDisplay
      <button className="usersdisplay__btn" onClick={handleFetchUsers}>request users</button>
      <h2>users</h2>
      <div className="usersdisplay__res"> response </div>
    </section>
  )
}

export default UsersDisplay
