import AuthService from "./auth.service";

export const getAuthUserQuery = {
    queryKey: ['getAuthUserQuery'],
    query: async () =>
      await AuthService.getAuthUser(),
};

export const loginMutation = {
  key: 'login',
  mutation: async (payload) => {
    return await AuthService.login(payload);
  },
};