import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/user/UserContext";
import { router } from "expo-router";

interface Props {
  children: React.JSX.Element;
}

export default function ProtectedRoutes({ children }: Props) {
  const { name, email } = useContext(UserContext);
  const isLoggedIn = name !== "" && email !== "";
  const [firstRun, setFirstRun] = useState(true);

  // useEffect(() => {
  //   console.log("firstRun", firstRun);
  //   if (!firstRun) {
  //     if (!isLoggedIn) {
  //       return router.replace("/Auth/email");
  //     }
  //   }
  //   return setFirstRun(false);
  // }, [router]);

  return <>{children}</>;
}
