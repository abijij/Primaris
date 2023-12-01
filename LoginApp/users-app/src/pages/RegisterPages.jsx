import { useEffect, useState } from "react"
import { UserForm } from "../componets/UserForm"
import { useParams } from "react-router-dom"

export const RegisterPages  = ({users=[], handlerAddUser, initialFormUserData }) => {

    const [selected, setUserSelected] = useState(initialFormUserData)
    
    const {id} = useParams();

    useEffect(() => {
      console.log('Id encontrado: ' + id)
      if (id) {
         const user = users.find(u => u.id == id ) || initialFormUserData;
      setUserSelected(user);
      }
     
    }, [id])

    return (
       <div className="container my-4">
         <h4>{selected.id > 0 ? 'Editar Usuario': 'Registrar Usuario ' }</h4>
         <div className="row">
            <div className="col">
                <UserForm selected={selected} handlerAddUser={handlerAddUser} initialFormUserData={initialFormUserData} />
            </div>
         </div>
       </div>
    )
}