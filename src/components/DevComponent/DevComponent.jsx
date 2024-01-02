import React, { useState } from "react";

const DevComponent = () => {
  // State to store the fetched users
  const [users, setUsers] = useState([]);

  // Function to fetch users from the fake API
  const fetchUsersFake = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    fetchUsersFake();
  };

  return (
    <section className="dev-component">
      <h2>DevComponent</h2>
      <button className="dev-component__btn" onClick={handleBtnClick}>
        Fetch Info
      </button>

      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevComponent;
