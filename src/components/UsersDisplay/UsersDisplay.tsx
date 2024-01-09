// UsersDisplay.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/features/userSlice";

const UsersDisplay = () => {
  const dispatch = useDispatch();
  const isDataAvailable = useSelector((state) => state.user.isDataAvailable);
  const users = useSelector((state) => state.user.users);
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching users...");
        await dispatch(fetchUsers());
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    if (!isDataAvailable) {
      fetchData();
    }
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
          users.map((user) => (
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
