// UsersDisplay.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../store/features/userSlice';
import apiUsers from '../../api/apiUsers';

const UsersDisplay = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!users || users.length === 0) {
          // Fetch users only if not already in the Redux store
          const apiUsersResponse = await apiUsers();
          dispatch(setUsers(apiUsersResponse.data));
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [dispatch, users]);

  return (
    <section className="UsersDisplay">
      <h2>Users</h2>
      <div>
        {users && users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="user">
              <p>{`${user.username}`}</p>
              <p>Email: {user.email}</p>
              <p>Celular: {user.phone_number}</p>
            </div>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </section>
  );
};

export default UsersDisplay;
