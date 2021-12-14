export const createUser = (nome) => localStorage.setItem('usuario', nome);

export const getUser = () => localStorage.getItem('usuario')