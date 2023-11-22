import { UserForm } from "./UserForm";

export const UserModalForm = ({ selected, initialFormUserData, handlerAddUser, handlerCloseForm }) => {
    return (
        <div className='abrir-modal animacion fadeIn'>
            <div className='modal' style={{ display: "block" }} tabIndex={-1}>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className="modal-title">
                                {selected.id > 0 ? 'Editar' : 'Crear'}Modal usuarios
                            </h5>
                        </div>
                        <div className="modal-body">
                            <UserForm
                                selected={selected}
                                initialFormUserData={initialFormUserData}
                                handlerAddUser={handlerAddUser}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}