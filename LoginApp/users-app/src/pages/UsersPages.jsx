import React from 'react'
import { UsersList } from '../componets/UsersList'
import { useUsers } from '../hooks/useUsers';
import { UserModalForm } from '../componets/UserModalForm';



const UsersPage = () => {
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
            {!visibleForm ||
              <UserModalForm 
              selected={selected} 
              initialFormUserData={initialFormUserData} 
              handlerCloseForm={handlerCloseForm} 
              handlerAddUser={handlerAddUser} />
            }

            <div className='container my-4'>
                <h2>Users App</h2>
                <div className='row'>
                    <div className='col'>
                        {visibleForm || <button
                            className='btn btn-primary my-2'
                            onClick={handlerOpenForm}>
                            Nuevo Usuario
                        </button>}

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
        </>
    );
}

export default UsersPage
