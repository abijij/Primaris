import { NavLink } from "react-router-dom"

export const UserRow = ({ id, userName, email, handlerRemoveUser, handlerUserSelectForm }) => {


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
                    })}
                >
                    Update
                </button>
            </td>
            <td>
               <NavLink className={'btn btn-secondary btn-sm'}
                to={'/users/edit/' + id }
               >
                Update route
               </NavLink>
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