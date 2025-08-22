import UserService from "./user.services";

export const getUserListQuery = {
    queryKey: ['getUserListQuery'],
    query: async (params) =>
      await UserService.list(params),
};

export const createUserMutation = {
  key: 'createUserMutation',
  mutation: async (body) => {
    return await UserService.create(body);
  },
};

export const deleteUserMutation = {
  key: 'deleteUserMutation',
  mutation: async (id) => {
    return await UserService.delete(id);
  },
};

export const updateUserMutation = {
  key: 'updateUserMutation',
  mutation: async (id, body) => {
    return await UserService.update(id, body);
  },
};

export const getUserQuery = {
  queryKey: (id) => ['getUser', id],
  query: async (id) => {
    return await UserService.get(id);
  },
};