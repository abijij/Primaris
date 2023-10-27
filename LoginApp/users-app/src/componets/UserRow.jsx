
export const UserRow = ({ id, userName, email, password, handlerRemoveUser, handlerUserSelectForm }) => {


    return (


        <tr >
            <td>{id}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>
                <button type="buttom "
                    className="btn btn-secondary btn=sm"
                    onClick={() => handlerUserSelectForm({
                        id,
                        userName,
                        email, 
                        password,
                    })}
                >
                    Update
                </button>
            </td>
            <td>
                <button type="buttom "
                    className="btn btn-danger btn=sm"
                    onClick={() => handlerRemoveUser(id)}
                >
                    Remove
                </button>
            </td>
        </tr>
    )
}