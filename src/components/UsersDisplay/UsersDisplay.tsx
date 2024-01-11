// UsersDisplay.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/features/userSlice";
import { userData } from "../../types";

interface userState {
  user: {
    isDataAvailable: boolean,
    users : [],
    isLoading : boolean,
    error?: string | null | undefined,
  }
}

const UsersDisplay = () => {
  const dispatch = useDispatch();
  const isDataAvailable = useSelector((state :userState) => state.user.isDataAvailable);
  const users = useSelector((state :userState) => state.user.users);
  const isLoading = useSelector((state :userState) => state.user.isLoading);
  const error = useSelector((state : userState) => state.user.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchUsers()as any);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (!isDataAvailable) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="UsersDisplay">
      <h2>Users</h2>
      <div>
        {isLoading === true ? (
          <p>Loading users...</p>
        ) : error !== null ? (
          <p>Error loading users: {error}</p>
        ) : Array.isArray(users) && users.length > 0 ? (
          users.map((user:userData) => (
            <div key={user.id} className="user">
              <p>{`${user.username}`}</p>
              <p>Email: {user.email}</p>
              <p>Celular: {user.phone_number}</p>
            </div>
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    </section>
  );
};

export default UsersDisplay;
