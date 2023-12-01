import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export const UserForm = ({ handlerAddUser, initialFormUserData, selected, handlerCloseForm }) => {

    const [userForm, setUserForm] = useState(initialFormUserData)

    const { id, userName, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...selected,
            password: ''
        });
    }, [selected])

    const onInputChange = ({ target }) => {

        // console.log(target.value)

        const { name, value } = target;

        setUserForm({
            ...userForm,
            [name]: value,
        })

    }

    const onSumit = (event) => {
        event.preventDefault();
        if (!userName || (!password && id === 0) || !email) {
            Swal.fire(
                'Error de validacion',
                'Debe completar los campos del formulario',
                'error'
            );
            return;

        }
        if (!email.includes('@')) {
            Swal.fire(
                'Error de validacion email',
                'El email debe de ser de un formato valido',
                'error'
            );
            return;
        }
        // console.log('Enviando el formulario ...')
        //Guarda el user en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initialFormUserData);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialFormUserData)
    }


    return (
        <form onSubmit={onSumit}>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="userName"
                value={userName}
                onChange={onInputChange}
            />
            {
                id > 0 || <input
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />
            }

            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input type="hidden"
                name='id'
                value={id}
            />
            <button
                className="btn btn-primary"
                type="submit"
            >
                {
                    id > 0 ? 'Edit' : 'Create'
                }
            </button>
            {
                !handlerCloseForm || <button
                    className="btn btn-primary mx-2"
                    type="button"
                    onClick={() => onCloseForm()}>
                    Close
                </button>
            }


        </form>
    )
}