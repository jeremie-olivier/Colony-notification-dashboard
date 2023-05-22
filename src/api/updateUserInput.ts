import { API, graphqlOperation } from "aws-amplify";
import { updateUser } from "../graphql/mutations";

export async function updateUserInput(
  idDiscord: any,
  walletAddress: string,
  userId: any,
  version: any
) {
  try {
    const response = await API.graphql(
      graphqlOperation(updateUser, {
        input: {
          idDiscord: idDiscord,
          walletAddress: walletAddress,
          id: userId,
          colonyID: "c7ab5019-9f19-4e97-a67d-edd99a90f978",
          _version: version,
        },
      })
    );

    if ("data" in response) {
      return response.data.updateUser;
    }
    console.log(response);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
