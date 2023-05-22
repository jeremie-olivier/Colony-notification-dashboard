import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getUserColony(colonyName: string) {
  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query Items($filter: ModelColonyFilterInput) {
      listColonies(filter: $filter) {
        items {
          Users {
            items {
              id
              walletAddress
              idDiscord
              _deleted
              createdAt
              _version
            }
          }
        }
      }
    }`,
    variables: {
      filter: {
        name: {
          eq: colonyName,
        },
      },
    },
  });

  return response.data?.listColonies?.items[0].Users.items;
}
