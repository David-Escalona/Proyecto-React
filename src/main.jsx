import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { main } from './componentes/main.js'
import { footer } from './componentes/footer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

//Inyectamos el componente main
document.querySelector('main').innerHTML = main.template

//Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template