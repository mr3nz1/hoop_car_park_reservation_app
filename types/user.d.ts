export interface UserInfoType {
  name: string;
  email: string;
  sessionId: string;
  authType: "",
}

export interface UserState {
  name: string;
  email: string;
  sessionId: string;
  authType: "",
  setUser: (userInfo: UserInfoType) => void;
  deleteUser: () => void;
}

export type UserActionType =
  | {
      type: "SET_USER";
      payload: UserInfoType;
    }
  | {
      type: "DELETE_USER";
    };
