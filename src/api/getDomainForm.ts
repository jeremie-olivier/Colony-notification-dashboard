import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getDomainForm(colonyName: string) {
  // Fetch a single record by its identifier

  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query($filter: ModelColonyFilterInput) {
      listColonies(filter: $filter) {
        items {
          domains {
            items {
              name
              id
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

  return response.data.listColonies.items[0]
    ? response.data.listColonies.items[0].domains.items: [];
}
