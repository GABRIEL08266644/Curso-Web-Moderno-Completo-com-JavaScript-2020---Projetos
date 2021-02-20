import React from 'react'
import ReactDOM from 'react-dom'

import Multi, { BoaNoite } from './componentes/Multiplos'

// import BomDia from './componentes/BomDia'

// const elemento = <h1>React 2</h1>
ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>
    
, document.getElementById('root'))