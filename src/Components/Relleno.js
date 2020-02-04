import React from 'react';

import logo from '../listo.png';
import Cabecera from './Cabecera';


function Contenido() {
  return (
    <div className="App">
      <nav> <Cabecera/> </nav>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2 className='colorbutton'></h2>
        </p>
        
        <a
          
          
        >
          
          <div>
       
        </div>
        </a>
      </header>
    </div>
  );
}

export default Contenido;