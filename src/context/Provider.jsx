import React, {useState} from 'react'
import Context from '.';

function Provider({ children }) {
  const [user, setUser] = useState('Renan');
  const [data, setData] = useState('');
  
  
  const contextValue = {
    user,
    setUser,
    data,
    setData,
  }

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  )
}

export default Provider;
