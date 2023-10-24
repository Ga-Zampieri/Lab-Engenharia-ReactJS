import React from 'react';
import './Contador.css';

function Contador () {
  return (  
  <div className='contador-full'>
    <div className='header'> 
      <h1 className='title'>Total</h1>
      <button className='button'>
        <img className='button-img' src="./src/refresh.png"></img>
      </button>
    </div>
    <p className='contador'></p>
    
    {/* body div */}
    <div className='body'>
      {/* man */}
      <div className='person'>
        <img src='./images/man.png'></img>
        <div className='buttons'>
          <button className='button'>
              <img className='button-img' src='./src/plus.png'></img>
          </button>
          <button className='button'>
              <img className='button-img' src='./src/minus.png'></img>
          </button>
        </div>
        <h1 className='title'>Total</h1>
        <p className='contador'></p>
      </div>


      {/* woman */}
      <div  className='person'> 
        <img src='./src/woman.png'></img>
        <div className='buttons'>
          <button className='button'>
              <img className='button-img' src='./src/plus.png'></img>
          </button>
          <button className='button'>
              <img className='button-img' src='./src/minus.png'></img>
          </button>
        </div>
        <h1 className='title'>Total</h1>
        <p className='contador'></p>
      </div>

    </div>
  
  
  </div>
  );

}


export default Contador;
