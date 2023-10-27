import React, { useReducer } from 'react'
import { UserForm } from './componets/UserForm'
import { UsersList } from './componets/UsersList'
import { usersReducer } from './reducers/usersReducer';
import { useState } from 'react';


const initialUsers = [
    {
        id: 1,
        userName: 'Edgar',
        password: '12345',
        email: 'edgar.abijij24@gmail.com'
    },
];

const initialFormUserData = {

    userName: '',
    password: '',
    email: '',

}

const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [selected, setSelected] = useState(initialFormUserData)

    const handlerAddUser = (user) => {
        // console.log(user);

        dispatch({
            type: 'addUser',
            payload: user,

        })
    }

    const handlerRemoveUser = (id) => {

        dispatch({
            type: 'removeUser',
            payload: id,
        })

    }

    const handlerUserSelectForm = (user) => {
        setSelected({...user})
    }


    return (
        <div className='container my-4'>
            <h2>Users App</h2>
            <div className='row'>
                <div className='col'>
                    <UserForm
                        selected={selected}
                        initialFormUserData={initialFormUserData}
                        handlerAddUser={handlerAddUser} />
                </div>
                <div className='col'>
                    {users.length === 0
                        ? <div className='alert alert-warning'>No hay usuarios en el sistema</div>
                        : <UsersList
                            handlerRemoveUser={handlerRemoveUser}
                            handlerUserSelectForm={handlerUserSelectForm}
                            users={users}
                        />}
                </div>
            </div>
        </div>
    )
}

export default UsersApp
