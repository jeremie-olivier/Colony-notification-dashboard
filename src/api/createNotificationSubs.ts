import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";

import * as query from "../graphql/queries";

import { CreateMentionInput } from "../API";

export type CreateNotifSubInput = {
  // colonyId: string;
  // authorId: string;

  domainId: string;
  discordChannelId: string;
  colonyEventTypeId: string;
  userMentionIds: string[];
  rolesMentionIds: string[];
};

export async function createNotificationSubscriptionInput(
  notifSubData: CreateNotifSubInput
) {
  // create Notification Subscription
  let notif = await createNotifSub(notifSubData);

  // create Mentions
  createMentions(notifSubData, notif);
}

async function createMentions(notifSubData: CreateNotifSubInput, notif: any) {
  let roles = notifSubData.rolesMentionIds;
  let users = notifSubData.userMentionIds;

  roles.forEach(async (role) => {
    await createMentionRole(role, notif.id);
  });

  users.forEach(async (user) => {
    let userID = await getUserByDiscordID(user);

    if (!userID) {
      userID = await createUser(user, notif);
    }
    await createMentionUser(userID, notif);
  });
}

async function createUser(user: string, notif: any) {
  try {
    const response = await API.graphql(
      graphqlOperation(mutations.createUser, {
        input: {
          idDiscord: user,
          colonyID: notif.colonyId,
        },
      })
    );

    if ("data" in response) {
      return response.data.createUser.id;
    }

    throw new Error("La réponse GraphQL est invalide");
  } catch (error) {
    // Gérez les erreurs de la requête
    console.error(error);
    throw error;
  }
}

async function getUserByDiscordID(userDiscordID: string) {
  try {
    const response = await API.graphql(
      graphqlOperation(query.listUsers, {
        filter: {
          idDiscord: {
            eq: userDiscordID,
          },
        },
      })
    );

    if ("data" in response) {
      return response.data.listUsers.items[0]
        ? response.data.listUsers.items[0].id
        : null;
    }

    throw new Error("La réponse GraphQL est invalide");
  } catch (error) {
    // Gérez les erreurs de la requête
    console.error(error);
    throw error;
  }
}

async function createMentionUser(user: string, notif: any) {
  try {
    const response = await API.graphql<CreateMentionInput>(
      graphqlOperation(mutations.createMention, {
        input: {
          notificationSubscription: notif.id,
          userId: user,
        },
      })
    );

    if ("data" in response) {
      return response.data.createMention;
    }

    throw new Error("La réponse GraphQL est invalide");
  } catch (error) {
    // Gérez les erreurs de la requête
    console.error(error);
    throw error;
  }
}

async function createMentionRole(roleID: string, notifSubId: string) {
  try {
    const response = await API.graphql<CreateMentionInput>(
      graphqlOperation(mutations.createMention, {
        input: {
          notificationSubscription: notifSubId,
          idDiscordRole: roleID,
        },
      })
    );

    if ("data" in response) {
      return response.data.createUser;
    }

    throw new Error("La réponse GraphQL est invalide");
  } catch (error) {
    // Gérez les erreurs de la requête
    console.error(error);
    throw error;
  }
}

async function createNotifSub(input: CreateNotifSubInput) {
  try {
    const response = await API.graphql(
      graphqlOperation(mutations.createNotificationSubscription, {
        input: {
          domainId: input.domainId,
          discordChannelId: input.discordChannelId,
          authorId: "b9dc0eab-e920-4118-91d1-c9a349dd8299",
          colonyEventTypeId: input.colonyEventTypeId,
          colonyId: "c7ab5019-9f19-4e97-a67d-edd99a90f978",
        },
      })
    );

    if ("data" in response) {
      return response.data.createNotificationSubscription;
    }

    throw new Error("La réponse GraphQL est invalide");
  } catch (error) {
    // Gérez les erreurs de la requête
    console.error(error);
    throw error;
  }
}
