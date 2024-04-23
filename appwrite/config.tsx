import { Account, Client } from "react-native-appwrite/src";

let client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6624e79e13678a3f6e7d");

export const account: Account = new Account(client);
