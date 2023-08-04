const user ={
    username: 'Edgar',
    email: 'edgar.abijij24@gmail.com',
    age: 26,
    ranking: 9,
}



//Desestructuracion de Objetos en una funcion
const detail = ({username, email}) => {
    
    console.log(`El detalle del usuario ${username} con el correo ${email}`)
}

detail(user)