import React from 'react';

import logo from '../logo lemom calidad.png';
import Cabecera from './Cabecera';


function Inicio() {
  return (
    <div className="App">
      <nav> <Cabecera/> </nav>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2 className='colorbutton'></h2>
        </p>
        
        <a
          className="App-link"
          
        >
          
          <div>
       
        </div>
        </a>
      </header>
    </div>
  );
}

export default Inicio;