import {useEffect, useState} from "react";

export default function useAuthState() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkState, setCheckState] = useState(true);
  // const [loginState, setLoginState] = useState(false);
  const loginState = localStorage.getItem("loggedIn");
  console.log(loginState);
  useEffect(() => {
    // setLoginState(loginState);
    if (loginState) {
      setLoggedIn(true);
    }
    setCheckState(false);
  }, [loginState]);

  return {loggedIn, checkState};
}
