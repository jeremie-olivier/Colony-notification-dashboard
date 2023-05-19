import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getUserInfo() {
  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query Items {
        listUsers {
          items {
            id
          }
        }
      }`,

  });

  return response.data.listUsers.items[0]
   ;
}
