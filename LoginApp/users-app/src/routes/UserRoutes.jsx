import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from '../componets/layout/NavBar';
import UsersPage from '../pages/UsersPages';
import { RegisterPages } from "../pages/RegisterPages";
import { useUsers } from "../hooks/useUsers";


export const UserRoutes = ({ login, handlerLogout }) => {

    const {
        users,
        selected,
        initialFormUserData,
        visibleForm,
        handlerCloseForm,
        handlerOpenForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectForm
    } = useUsers();

    return (
        <>
            <NavBar login={login} handlerLogout={handlerLogout} />
            <Routes>
                <Route path="users" element={<UsersPage
                    users={users}
                    selected={selected}
                    initialFormUserData={initialFormUserData}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectForm={handlerUserSelectForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                />} />
                <Route path="users/register"
                    element={<RegisterPages handlerAddUser={handlerAddUser}
                        initialFormUserData={initialFormUserData} />} />

                <Route path="users/edit/:id"
                    element={<RegisterPages 
                        users={users}
                        handlerAddUser={handlerAddUser}
                        initialFormUserData={initialFormUserData} />} />

                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}