import React, {useState} from 'react'
import Context from '.';

function Provider({ children }) {
  const [nome, setNome] = useState('');
  
  
  const contextValue = {
    nome,
    setNome,
  }

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  )
}

export default Provider;
