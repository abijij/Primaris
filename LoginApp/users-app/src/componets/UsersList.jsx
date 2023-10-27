import { UserRow } from "./UserRow"

export const UsersList = ({  handlerRemoveUser, handlerUserSelectForm, users = [] }) => {

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>email</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({id, userName, email, password}) => (
                        <UserRow
                            key={id}
                            id={id}
                            userName={userName}
                            email={email}
                            password={password}
                            handlerRemoveUser={handlerRemoveUser}
                            handlerUserSelectForm={handlerUserSelectForm}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}