const user ={
    username: 'Edgar',
    email: 'edgar.abijij24@gmail.com',
    age: 26,
    ranking: 9,
}

//Forma anticuada con mas linea y se define cada variable de forma indepoendiente
const username = user.username;
const ranking = user.ranking;
const age = user.age;


//forma mas comoda de desestructurar
// const {username, ranking, age} = user;

console.log(`${username} tiene ${age} de edad` );
console.log(ranking);