
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../graphql/mutations";

export async function createUserInput(
  idDiscord: any,
  walletAddress: string
) {
  try {
    const response = await API.graphql(
      graphqlOperation(createUser, {
        input: {
          idDiscord: idDiscord,
          walletAddress: walletAddress,
          colonyID: "c7ab5019-9f19-4e97-a67d-edd99a90f978",
       
        },
      })
    );

    if ("data" in response) {
      return response.data.createUser;
    }
  } catch (error) {
    // Gérez les erreurs de la requête
    console.error(error);
    throw error;
  }
}
