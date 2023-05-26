import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getNotificationSubscription(colonyName: string) {
  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query Query($filter: ModelDiscordServerFilterInput) {
      listDiscordServers(filter: $filter) {
        items {
          colonies {
            items {
              colony {
                name
          notificationSubscriptions {
            items {
              id
              _deleted
              _version
              domain {
                name
              }
              colonyEventType {
                type
              }
              colony {
                name
              }
              discordChannel {
                name
                discordServer {
                  name
                }
              }
              hits {
                items {
                  id
                }
              }
              createdAt
              mentions {
                items {
                  idDiscordRole
                  user {
                    idDiscord
                  }
                }
              }
              author {
                idDiscord
              }
            }
          }
              }
            }
          }
          id
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

  return response.data.listDiscordServers.items[0].colonies.items[0].colony
    .notificationSubscriptions.items;
}
