import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getMentionForm(colonyName: string) {
  // Fetch a single record by its identifier

  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query Query {
        listMentions {
          items {
            id
          }
        }
      }`,
  });

  return response.data.listMentions.items[0]
    ? response.data.listMentions.items: [];
}