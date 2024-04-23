import React, {
  ReducerAction,
  createContext,
  useReducer,
  useState,
} from "react";
import { AppState } from "react-native";
import { Account, Client } from "react-native-appwrite/src";

interface ReducerType {
  state: UserState;
  payload: object;
}
interface UserInfoType {
  account?: Account;
  email?: string;
  name?: string;
}

interface UserState {
  account: Account | null;
  email: string;
  name: string;
  setAccount: (account: Account) => void;
  deleteUser: () => void;
  setUser: (userInfo: UserInfoType) => void;
}

interface ReducerActionType {
  type: "SET_ACCOUNT" | "DELETE_USER";
  payload?: UserInfoType;
}

export const UserContext = createContext<UserState>({
  account: null,
  email: "",
  name: "",
  setAccount: (account: Account) => {},
  deleteUser: () => {},
  setUser: (userInfo: UserInfoType) => {},
});

async function userReducer(
  state: UserState,
  action: ReducerActionType
): Promise<UserState> {
  if (action.type === "SET_ACCOUNT") {
    // console.log(action.payload);
    return { ...state, account: action.payload };
  } else if (action.type === "DELETE_USER") {
    console.log("DELETE_USER");
    return state;
  } else if (action.type === "SET_USER") {
    try {
      return {
        ...state,
        name: action.payload?.name,
        email: action.payload?.email,
      };
    } catch (err) {
      console.log(err);
    }
  }

  return state;
}

interface Props {
  children: React.JSX.Element;
}

export default function UserProvider({ children }: Props) {
  const [userState, dispatch] = useReducer(userReducer, {
    account: null,
    email: "",
    name: "",
    setAccount: () => {},
    deleteUser: () => {},
    setUser: () => {},
  });

  function setAccount(account: Account) {
    // console.log(account)
    dispatch({ type: "SET_ACCOUNT", payload: account });
  }

  function deleteUser() {
    dispatch({ type: "DELETE_USER" });
  }

  function setUser(userInfo: UserInfoType) {
    console.log("set user function called");
    dispatch({ type: "SET_USER", payload: userInfo });
  }

  const value = {
    ...userState,
    setAccount,
    deleteUser,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
