import { LoginPage } from './auth/pages/LoginPage';
import { useAuth } from './auth/hooks/useAuth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserRoutes } from './routes/userRoutes';


const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}
const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuth()

    return (
        <Routes>
            {
                login && login.isAuth
                    ? (
                        <Route path='/*' element={<UserRoutes login={login} handlerLogout={handlerLogout} />} />
                    )
                    : <>

                        <Route path='/login' element={<LoginPage handlerLogin={handlerLogin} />} />

                        <Route path='/*' element={<Navigate to={"/login"}/>}/>

                    </>
            }

        </Routes>
    );
}

export default UsersApp
