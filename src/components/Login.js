import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            userActions.login({
              name: "Ashwin",
              age: 36,
              email: "ashwin@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
      <button onClick={() => dispatch(userActions.logout())}>Logout</button>
    </div>
  );
}

export default Login;
