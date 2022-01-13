import { useState } from 'react';
import './App.css';



function Contador(){
  console.log(useState())
  const [contador, setContador] = useState(1);
  
  function AddContador(){
    setContador(contador+1)
  }
  return(
    <div>
      <h1>{contador}</h1>
      <button onClick={AddContador}>Adicionar</button>
    </div>
  )
}
function App() {
  return (
    <div>
      <Contador />
    </div>
  );
}

export default App; 
