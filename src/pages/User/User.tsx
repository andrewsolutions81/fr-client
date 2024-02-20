import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";

const User = () => {
  const isLogged = useSelector((state: any) => state.auth.isLogged);
  const user = useSelector((state: any) => state.auth.currentUser);

  return (
    <div className="user">
      {isLogged ? (
        <>
          <h4 className="user__name">{user.username}</h4>
          <p className="user__email">{user.email}</p>
          <p className="user__phone_number">{user.phone_number}</p>
          <p className="user__is_admin">Es administradore : {user.is_admin? "si": "no"}</p>
          <p className="user__createdAt"> Creado en : {user.createdAt}</p>
          <p className="user__updatedAt"> Actualizado en : {user.updatedAt}</p>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default User;
