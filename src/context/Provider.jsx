import React, {useState} from 'react'
import Context from '.';

function Provider({ children }) {
  const [user, setUser] = useState('Usuário');
  const [data, setData] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [questions, setQuestions] = useState([]);
  
  
  const contextValue = {
    user,
    setUser,
    data,
    setData,
    quantidade,
    setQuantidade,
    questions,
    setQuestions,
  }

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  )
}

export default Provider;
