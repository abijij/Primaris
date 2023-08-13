import  PropTypes from 'prop-types';
export const HelloWorld = ({user, id, title, book }) => {
    console.log(title)
    // const name = 'Edgar';

    return( 
    <>
        <h1>{ title }</h1>
        <div>que tal {user.name} {user.lastname}con el Id: {id + 10}</div> 
        <div>{book}</div>    
    </>
    );

}

HelloWorld.propTypes = {
    title: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    user:PropTypes.object.isRequired
}
HelloWorld.defaultProps ={
    title: 'Hola Mundo por defecto',
     book: 'UML got a gota'
}