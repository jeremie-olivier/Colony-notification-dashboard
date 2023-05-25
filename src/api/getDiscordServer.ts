import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';


export async function getDiscordServer(discordServerName: any) {
    const response = await API.graphql<GraphQLQuery<any>>({
        query: `query Query($filter: ModelDiscordServerFilterInput) {
            listDiscordServers(filter: $filter) {
              items {
                idDiscord
                name
              }
            }
          }`,
          variables: {
            filter: {
                name: {
                    eq: discordServerName,
                },
            },
          },
    });
  return response.data.listDiscordServers.items[0]
  ? response.data.listDiscordServers.items[0]
  : [];
}
