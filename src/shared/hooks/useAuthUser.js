import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../data/stores/useUser.store";
import { getAuthUserQuery } from "../../data/services/auth/auth.queries";

export function useAuthUser() {
    const { authUser, setAuthUser } = useUser();

    useQuery({
        enabled: !authUser?.id,
        queryKey: ['getAuthUser'],
        queryFn: () =>
          getAuthUserQuery.query()
            .then(data => {
              setAuthUser(data.data.data);
              return data;
            })
            .catch(error => {
              console.error('Erro ao buscar dados:', error);
              throw error;
            }),
      });
    
    return { authUser }
};