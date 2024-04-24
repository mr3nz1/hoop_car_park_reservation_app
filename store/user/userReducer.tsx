import { validateInterpolationOptions } from "@shopify/react-native-skia";
import { UserActionType, UserState } from "../../types/user";
import { UserContext } from "./UserContext";

export default function userReducer(
  state: UserState,
  action: UserActionType
): UserState {
  switch (action.type) {
    case "SET_USER":
      console.log("SET_USER", action.payload);
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };

    case "DELETE_USER":
      console.log("DELETE_USER");
      return { ...state };

    default:
      return { ...state };
  }
}
