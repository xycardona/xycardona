
import './App.css'

import Botoncito from './myComponents/Boton';
import Escoge from './myComponents/Select';
function App() {
  const elColor=()=>{
   
    
    alert("c");

  }

  return <>
  <div >
  <Botoncito ></Botoncito>
  </div><br></br>
  <div> <Escoge onChange={elColor}></Escoge></div>
 
  </>
  
}

export default App;
