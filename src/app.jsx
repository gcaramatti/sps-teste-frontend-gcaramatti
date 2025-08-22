import { Header } from "./components/header/header.component"
import { AppRoutes } from "./shared/routes/routes.index";
import { Toaster } from "sonner";
import { useAuthUser } from "./shared/hooks/useAuthUser";

export function App() {
    const { authUser } = useAuthUser();
    const isLoggedIn = authUser && authUser?.id && authUser.id !== undefined;

    return (
        <>
            <Toaster richColors position='top-right' duration={2000} />
            {isLoggedIn && <Header />}

            <div className={isLoggedIn ? 'pt-[70px]' : ''}>
                <AppRoutes />
            </div>
        </>
    )
}