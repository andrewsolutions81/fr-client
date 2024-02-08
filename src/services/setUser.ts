// setUser.ts
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../store/features/authSlice';
import apiUserById from '../api/apiUserById';

const setUser = async () => {
  // const dispatch = useDispatch();
  // const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  // const { currentUser } = useSelector((state) => state.auth);

  // // if there is already a user, just keep that user in the store and return
  // if (currentUser) {
  //   return;
  // }

  // // if there is no token in the store and there is a token, set user from token
  // if (!currentUser && token) {
  //   try {
  //     const userData = await apiUserById(token);
  //     dispatch(loginUser(userData));
  //   } catch (error) {
  //     // Handle error, maybe token is invalid or expired
  //     console.error('Error fetching user data:', error);
  //     dispatch(logoutUser()); // If there's an error, log the user out
  //   }
  // }
  return "x"
};

export default setUser;

