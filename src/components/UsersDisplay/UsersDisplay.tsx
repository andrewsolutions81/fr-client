// UsersDisplay.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../store/features/userSlice';

const UsersDisplay = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      dispatch(setUsers(data.users));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    if (users.length === 0) {
      // Fetch users only if not already in the Redux store
      fetchUsers();
    }
  }, [users]);

  return (
    <section className='UsersDisplay'>
      <h2>Users</h2>
      <div>
        {users.map((user) => (
          <div key={user.id} className="user">
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsersDisplay;
