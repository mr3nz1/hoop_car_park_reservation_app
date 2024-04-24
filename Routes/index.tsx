import { useContext } from "react";
import { UserContext } from "../store/user/UserContext";
import AppStack from "./Stacks/AppStack";
import AuthStack from "./Stacks/AuthStack";

export default function Index() {
  const { name, email } = useContext(UserContext);
  const isLoggedIn = name !== "" && email !== "";

  console.log(isLoggedIn);

  return isLoggedIn ? <AppStack /> : <AuthStack />;
}
