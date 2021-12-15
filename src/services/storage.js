export const createUser = (nome) => localStorage.setItem('usuario', nome);

export const getUser = () => localStorage.getItem('usuario')

export const createRelatorio = (relatorio) => localStorage.setItem('relatorio', JSON.stringify(relatorio));

export const getRelatorio = () => JSON.parse(localStorage.getItem('relatorio'))