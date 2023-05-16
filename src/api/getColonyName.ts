import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getColonyName(colonyName: string) {
  // Fetch a single record by its identifier

  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query {
        listColonies {
          items {
            name
          }
        }
      }`,
  });

  return response.data.listColonies.items[0]
    ? response.data.listColonies.items: [];
}