import UsersPage from './pages/UsersPages';
import { LoginPage } from './auth/pages/LoginPage';
import { NavBar } from './componets/layout/NavBar';
import { useAuth } from './auth/hooks/useAuth';

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}
const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuth()

    return (
        <>
            {login && login.isAuth
                ? (
                    <>
                        <NavBar login={login} handlerLogout={handlerLogout} />
                        <UsersPage />
                    </>
                )
                : <LoginPage handlerLogin={handlerLogin} />
            }


        </>
    );
}

export default UsersApp
