import React, {useState, useEffect} from 'react'
import Context from '.';
import { createRelatorio } from '../services/storage';

function Provider({ children }) {
  const [user, setUser] = useState('Usuário');
  const [data, setData] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(false);
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    createRelatorio(storage);
  }, [storage]);

  
  
  const contextValue = {
    user,
    setUser,
    data,
    setData,
    quantidade,
    setQuantidade,
    questions,
    setQuestions,
    start,
    setStart,
    storage,
    setStorage,
  }

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  )
}

export default Provider;
