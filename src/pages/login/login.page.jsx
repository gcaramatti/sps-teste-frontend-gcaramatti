import { InputText } from "../../components/input/inputText/inputText.component";
import { Button } from "../../components/button/button.component";
import { useLoginPage } from "./useLoginPage";

export function LoginPage() {
  const loginHookData = useLoginPage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="bg-white flex-col items-center p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-lg text-gray-700">Gestão de cobranças</h2>
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-8">Login</h1>

        <form className="space-y-4 flex flex-col items-center" onSubmit={loginHookData.form.onSubmitLogin()}>
            <InputText errorMessage={loginHookData?.form?.errors?.email?.message} label="Email" placeholder="teste@email.com.br" type="email" htmlForName="email" name="email" control={loginHookData.form.control} />
            <InputText errorMessage={loginHookData?.form?.errors?.password?.message} label="Senha" placeholder="********" type="password" htmlForName="password" name="password" control={loginHookData.form.control} />
          <Button type="submit" />
        </form>
      </div>
    </div>
  )
}
