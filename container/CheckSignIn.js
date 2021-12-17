import React, { useEffect } from "react";
import { useGetState } from "../context/AppContext";
import { useRouter } from "next/router";

// Component to check if the app is signed in
const CheckSignIn = (props) => {
  const router = useRouter();
  const { children } = props;
  const { isLoggedIn } = useGetState();

  useEffect(() => {
    if (!isLoggedIn && router.pathname !== "/") {
      router.push("/");
    }
  }, [isLoggedIn, router.pathname]);

  return <div>{children}</div>;
};

export default CheckSignIn;
