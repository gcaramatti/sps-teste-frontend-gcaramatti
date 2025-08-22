import { useMutation, useQuery } from "@tanstack/react-query";
import { createUserMutation, deleteUserMutation, getUserListQuery, updateUserMutation } from "../../data/services/users/user.queries";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddUserSchema } from "./addUser.schema";
import { toast } from "sonner";

export function useHomePage() {
    const [userList, setUserList] = useState([]);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [pendingDeleteRow, setPendingDeleteRow] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);
    const [isReadForm, setIsReadForm] = useState(false);
    const [usersPagination, setUsersPagination] = useState({ page: 1, pageSize: 1, total: 0 });
    const params = {
        page: usersPagination.page,
        pageSize: usersPagination.pageSize
    };
    const { clearErrors, setValue, reset, control, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(AddUserSchema)
    });
    const userToEdit = useRef({});
    const usersTableColumns = [
        { header: 'Nome', accessor: 'name' },
        { header: 'E-mail', accessor: 'email' },
        { header: 'Data de criação', accessor: 'createdAt' },
    ];
    const { refetch, isLoading: isLoadingLoginQuery } = useQuery({
        queryKey: ['getUserList'],
        queryFn: () =>
        getUserListQuery.query(params).then(data => {
            const value = data.data;
            setUserList(value);
            console.log(data.pagination);
            setUsersPagination(data.pagination);
            return data;
        })
    });

    const mutation = useMutation({
        mutationFn: async (newUserData) => await createUserMutation.mutation(newUserData),
        onSuccess: () => {
            refetch();
            closeModalAddUser();
            toast.success('Usuário cadastrado com sucesso!');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (newUserData) => await deleteUserMutation.mutation(newUserData),
        onSuccess: () => {
            refetch();
            reset();
            toast.success('Usuário deletado com sucesso!');
        },
    });

    const updateMutation = useMutation({
    mutationFn: async (payload) => await updateUserMutation.mutation(payload.id, payload.data),
        onSuccess: () => {
            refetch();
            closeModalAddUser();
            toast.success('Usuário atualizado com sucesso!');
        },
    });

    function onSubmitAddUser() {
        return handleSubmit(async (data) => {
            try {
                if (isEditForm) {
                    console.log(data);
                    await updateMutation.mutateAsync({ id: userToEdit.current.id, data });
                } else {
                    await mutation.mutateAsync(data);
                }
            } catch (err) {
                toast.error('Erro ao realizar ação: ' + (err?.response?.data?.message || err?.message || '')); 
            }
        });
    }

    function openModalAddUser() {
        reset();
        setIsOpenModal(true);
    }

    function closeModalAddUser() {
        clearErrors();
        reset();
        setIsReadForm(false);
        setIsEditForm(false);
        userToEdit.current = {};
        setIsOpenModal(false);
    }

    async function deleteUser(row) {
        setPendingDeleteRow(row);
        setIsAlertOpen(true);
    }

    async function confirmDelete() {
        if (!pendingDeleteRow) return;
        try {
            await deleteMutation.mutateAsync(pendingDeleteRow.id);
        } finally {
            setPendingDeleteRow(null);
            setIsAlertOpen(false);
        }
    }

    function editUser(row) {
        fillForm(row);
        setIsEditForm(true);
        userToEdit.current = row;
        setIsOpenModal(true);
    }

    function readUser(row) {
        fillForm(row);
        setIsEditForm(false);
        setIsReadForm(true);
        userToEdit.current = row;
        setIsOpenModal(true);
    }

    function fillForm(row) {
        setValue('name', row.name);
        setValue('email', row.email);
        setValue('password', '');
    }

    function onChangePerPage(data) {
        setUsersPagination({
            page: usersPagination.page,
            pageSize: data,
            total: usersPagination.total,
            totalPages: usersPagination.totalPages
        });

        usersPagination.page = 1;

        params.page = usersPagination.page;
        params.pageSize = data;

        refetch();
    }

    function onChangePage(data) {
        setUsersPagination({
        page: data,
        pageSize: usersPagination.pageSize,
        total: usersPagination.total,
        totalPages: usersPagination.totalPages
        });

        usersPagination.page = data;

        params.page = data;
        params.pageSize = usersPagination.pageSize;

        refetch();
    }

    return { 
        table: { userList, usersTableColumns }, 
        pagination: { usersPagination, onChangePage, onChangePerPage }, isLoading: isLoadingLoginQuery, 
        form: { control, errors, onSubmitAddUser, isEditForm, isReadForm }, 
        modal: { isOpenModal, openModalAddUser, closeModalAddUser },
        deleteUser, editUser, readUser, userToEdit,
        alert: { isAlertOpen, setIsAlertOpen, confirmDelete }
    };
}