import { Navigate, useRoutes } from "react-router-dom";
import { HomePage } from "../../pages/home/home.page";
import { LoginPage } from "../../pages/login/login.page";
import { useUser } from "../../data/stores/useUser.store";

export function AppRoutes() {
      const { authUser } = useUser();
      const isLoggedIn = authUser && authUser?.id && authUser.id !== undefined;
      
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