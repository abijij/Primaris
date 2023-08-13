import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Forma de puro Javascript
// const h2 = document.createElement('h2')
// h2.innerText = 'Hola mundo';
//Forma simpliificada con javascript DOM
// const h1 = React.createElement('div' , null , React.createElement('ul' , null, React.createElement('li', null , 'item 1')));

//Javascript trabajado con etiquetas HTML
const h1 = <div><ul><li>Hola mundo</li></ul></div>

ReactDOM.createRoot(document.getElementById('root')).render(
 h1
 
)
