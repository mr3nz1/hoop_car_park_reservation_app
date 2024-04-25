import { Account, Client, Databases } from "react-native-appwrite/src";
// import * as SecureStore from "expo-secure-store";

// export const jwt = SecureStore.getItem("jwt");

export let client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6627e810cfd8765e7b01");

// if (jwt) {
//   client.setJWT(jwt);
// }

export let account: Account = new Account(client);

export let databases = new Databases(client);
