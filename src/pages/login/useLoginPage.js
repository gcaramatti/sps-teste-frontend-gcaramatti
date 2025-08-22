import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./login.schema";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { useUser } from "../../data/stores/useUser.store";
import { getAuthUserQuery, loginMutation } from "../../data/services/auth/auth.queries";
import { useMutation, useQuery } from '@tanstack/react-query'

export function useLoginPage() {
    const { setAuthUser } = useUser();
    const [authUserEnabled, setAuthUserEnabled] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(LoginSchema)
    });

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (loginData) => await loginMutation.mutation(loginData),
        onSuccess: (response) => {
            toast.success('Login realizado com sucesso!');
            setAuthUserEnabled(true);
            localStorage.setItem('token', response.data.token);
        },
    });

    const { isLoading: isLoadingLoginQuery } = useQuery({
        enabled: authUserEnabled,
        queryKey: ['getAuthUser'],
        queryFn: () =>
        getAuthUserQuery.query()
            .then(data => {
                console.log(data.data.data);
                setAuthUser(data.data.data);
                navigate('/');
                return data;
            })
            .catch(error => {
            console.error('Erro ao buscar dados:', error);
            throw error;
            }),
    });

    function onSubmitLogin() {
        return handleSubmit(async (data) => {
            try {
                await mutation.mutateAsync(data);
            } catch (err) {
                toast.error('Erro ao logar: ' + (err?.response?.data?.message || err?.message || '')); 
            }
        });
    }

    return { form: { control, onSubmitLogin, errors }, isLoading: mutation.isLoading || isLoadingLoginQuery }
}