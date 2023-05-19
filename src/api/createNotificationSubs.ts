import { API, graphqlOperation } from "aws-amplify";
import { createNotificationSubscription } from '../graphql/mutations';


export async function createNotificationSubscriptionInput(domainOption: any, discordChannelOption: any, mentionOption: any, colonyEventTypeOption: any) {
  try {
    const response = await API.graphql(graphqlOperation(createNotificationSubscription, {
      input: {
        domainId: domainOption,
        discordChannelId : discordChannelOption,
        authorId: "b9dc0eab-e920-4118-91d1-c9a349dd8299",
        colonyEventTypeId: colonyEventTypeOption,
        colonyId: "c7ab5019-9f19-4e97-a67d-edd99a90f978"
      },
    }));

    if ('data' in response) {
      return response.data.createNotificationSubscription;
    }

    throw new Error('La réponse GraphQL est invalide');
  } catch (error) {
    // Gérez les erreurs de la requête
    console.error(error);
    throw error;
  }
}
