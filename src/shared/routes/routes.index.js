import { Navigate, useRoutes } from "react-router-dom";
import { HomePage } from "../../pages/home/home.page";
import { LoginPage } from "../../pages/login/login.page";
import { useAuthUser } from "../hooks/useAuthUser";

export function AppRoutes() {
    const { authUser } = useAuthUser();
    const isLoggedIn = authUser && authUser?.id && authUser.id !== undefined;
    console.log(isLoggedIn, authUser);
    return useRoutes([
        {
            path: '/',
            element: isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />
        },
        {
            path: '/login',
            element: isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />
        }
    ])
}