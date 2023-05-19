import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateUser } from "../graphql/mutations";

export async function updateUserInput(
  idDiscord: any,
  walletAddress: string
) {
  try {
    const response = await API.graphql(
      graphqlOperation(updateUser, {
        input: {
          idDiscord: idDiscord,
          walletAddress: walletAddress,
          colonyID: "c7ab5019-9f19-4e97-a67d-edd99a90f978",
        },
      })
    );

    if ("data" in response) {
      return response.data.updateUser;
    }
  } catch (error) {
    // Gérez les erreurs de la requête
    console.error(error);
    throw error;
  }
}
