import { Account, Client } from "react-native-appwrite/src";

let client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6627e810cfd8765e7b01");

export const account: Account = new Account(client);
