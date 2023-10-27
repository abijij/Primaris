import { useEffect, useState } from "react"

const initialFormUserData = {

    userName: '',
    password: '',
    email: '',

}

export const UserForm = ({handlerAddUser, initialFormUserData, selected}) => {

    const [userForm, setUserForm] = useState(initialFormUserData)

    const { userName, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...selected, 
            //password:''
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
        if (!userName || !password || !email) {
            alert('Debe completar los campos del formulario');
            return;

        }
        // console.log('Enviando el formulario ...')

        // console.log(userForm)

        //Guarda el user en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initialFormUserData);
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
            <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <button
                className="btn btn-primary"
                type="submit"
            >
                Create
            </button>

        </form>
    )
}