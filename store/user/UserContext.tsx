import React, {
  Children,
  Dispatch,
  SetStateAction,
  createContext,
  useReducer,
} from "react";
import { UserActionType, UserInfoType, UserState } from "../../types/user";
import userReducer from "./userReducer";

interface UserContextType {
  name: string;
  email: string;
  sessionId: string;
  authType: string;
  setUser: (userInfo: UserInfoType) => void;
  deleteUser: () => void;
}

export const UserContext = createContext<UserContextType>({
  name: "",
  email: "", // Corrected to an empty string
  sessionId: "",
  authType: "",
  setUser: (userInfo: UserInfoType) => {},
  deleteUser: () => {},
});

const initialState: UserState = {
  name: "",
  email: "", // Corrected to an empty string
  sessionId: "",
  authType: "",
  setUser: (userInfo: UserInfoType) => {},
  deleteUser: () => {},
};

export default function UserProvider({
  children,
}: {
  children: React.JSX.Element;
}) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  async function setUser(userInfo: UserInfoType) {
    dispatch({ type: "SET_USER", payload: userInfo });
  }

  function deleteUser() {
    console.log("deleteUser");
  }

  const value = {
    ...state,
    setUser,
    deleteUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
