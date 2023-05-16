import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getColonyEventTypeForm(colonyName: string) {
  // Fetch a single record by its identifier

  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query {
        listColonyEventTypes {
          items {
            type
            id
          }
        }
      }`,
  });

  return response.data.listColonyEventTypes.items[0]
    ? response.data.listColonyEventTypes.items: [];
}
