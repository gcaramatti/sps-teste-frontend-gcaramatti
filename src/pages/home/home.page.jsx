import { Button } from "../../components/button/button.component";
import { Modal } from "../../components/modal/modal.component";
import { ResponsiveTable } from "../../components/table/table.component";
import { useUser } from "../../data/stores/useUser.store";
import { useHomePage } from "./useHomepage";
import { InputText } from "../../components/input/inputText/inputText.component";
import { Pagination } from "../../components/pagination/pagination.component"
import { RiUserAddLine, RiSearchLine, RiDeleteBinLine, RiEditLine } from "@remixicon/react";
import AlertDialog from "../../components/alert/alertDialog";

export function HomePage() {
    const { authUser } = useUser();
  const { userToEdit, readUser, deleteUser, editUser, table, form, modal, alert, pagination } = useHomePage();
  const { isAlertOpen, setIsAlertOpen, confirmDelete } = alert;
    
    return (
        <div className="flex justify-center">
            <AlertDialog
              isOpen={isAlertOpen}
              title="Confirmar exclusão"
              message="Você realmente deseja confirmar essa ação?"
              onCancel={() => setIsAlertOpen(false)}
              onConfirm={() => confirmDelete()}
            />

            <Modal isOpen={modal.isOpenModal} onClose={modal.closeModalAddUser} title="Adicionar usuário" actionLabel="Adicionar" onSubmit={form.onSubmitAddUser()} >
                <div className="flex flex-col gap-4">
                    {userToEdit.current.id && <p>Cadastrado em: {userToEdit.current.createdAt}</p>}
                    <div className="flex flex-col md:flex-row gap-2">
                        <InputText disabled={form.isReadForm} name="name" label="Nome" control={form.control} errorMessage={form.errors?.name?.message} />
                        <InputText disabled={form.isReadForm} name="email" label="E-mail" control={form.control} errorMessage={form.errors?.email?.message} />
                    </div>

                    <div className="w-full md:w-[50%]">
                        <InputText disabled={form.isReadForm} name="password" label="Senha" type="password" control={form.control} errorMessage={form.errors?.password?.message} />
                    </div>
                </div>
            </Modal>

            <div className="mt-[20px] w-full max-w-[1200px]">
                Ola, {authUser?.name || 'Usuário'}!

                <div>
                    <Button onClick={modal.openModalAddUser} className="my-[15px]" label="Novo usuário" icon={<RiUserAddLine className="h-[20px] w-[20px]" />} />

                    <ResponsiveTable data={table.userList} columns={table.usersTableColumns} renderActions={(row) => (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => readUser(row)}
                          className="relative group cursor-pointer"
                        >
                          <RiSearchLine className="h-5 w-5" />

                          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Detalhes
                          </span>
                        </button>

                        <button
                          onClick={() => editUser(row)}
                          className="relative group cursor-pointer"
                        >
                          <RiEditLine className="h-5 w-5" />

                          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Editar
                          </span>
                        </button>

                        <button
                          onClick={() => deleteUser(row)}
                          className="relative group cursor-pointer"
                        >
                          <RiDeleteBinLine className="h-5 w-5" />

                          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            Excluir
                          </span>
                        </button>
                      </div>
                    )} />

                    <Pagination pageSize={pagination.usersPagination.pageSize} currentPage={pagination.usersPagination.page} total={pagination.usersPagination.total} onChangePage={(page) => pagination.onChangePage(page)} onChangePageSize={(page) => pagination.onChangePerPage(page)}  />
                </div>
            </div>
        </div>
    )
}