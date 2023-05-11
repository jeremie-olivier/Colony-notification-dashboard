import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getDiscordChannelForm(colonyName: string) {
  // Fetch a single record by its identifier

  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query Query {
        listDiscordChannels {
          items {
            name
          }
        }
      }`,
  });

  return response.data.listDiscordChannels.items[0]
    ? response.data.listDiscordChannels.items: [];
}