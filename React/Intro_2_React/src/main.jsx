
import ReactDOM from 'react-dom/client'
import {HelloWorld} from './components/HelloWorld'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <HelloWorld 
  user ={{name: 'Edgar', lastname: ' Gutierrez '}} 
  id={1}
  title={'Hola mundo'}
  />
 </React.StrictMode>
)
 