import { useUser } from "./data/stores/useUser.store";
import { Header } from "./components/header/header.component"
import { AppRoutes } from "./shared/routes/routes.index";
import { Toaster } from "sonner";

export function App() {
    const { authUser } = useUser();
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