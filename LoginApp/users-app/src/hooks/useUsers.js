
import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialUsers = [
    {
        id: 1,
        userName: 'Edgar',
        password: '12345',
        email: 'edgar.abijij24@gmail.com'
    },
];

const initialFormUserData = {
    id: 0,
    userName: '',
    password: '',
    email: '',
}

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [selected, setSelected] = useState(initialFormUserData);
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate = useNavigate();

    const handlerAddUser = (user) => {
        // console.log(user);
        // const type = (user.id === 0) ? 'addUser' : 'updateUser' ;  solo si se ocupa mas de 1 vez

        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: user,

        });
        Swal.fire(
            (user.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
            (user.id === 0) ? 'El usuario ha sido creado con exito' : 'El usuario se  ha actualizado con exito',
            'success'
        )
        handlerCloseForm();
        navigate('/users');
    }

    const handlerRemoveUser = (id) => {

        Swal.fire({
            title: 'Estas seguro que desea eliminar?',
            text: "Cuidado el usuario sera eliminado y no se puede revertir este cambio!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id,
                });
                Swal.fire(
                    'Usuario Eliminado!',
                    'El usuario a sido eliminado con exito.',
                    'success'
                )
            }
        })

    }

    const handlerUserSelectForm = (user) => {
        setVisibleForm(true);
        setSelected({ ...user })

    }

   const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setSelected(initialFormUserData);
    }

    return {
        users,
        selected,
        initialFormUserData,
        visibleForm,
        handlerOpenForm,
        handlerCloseForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectForm,
    }
}