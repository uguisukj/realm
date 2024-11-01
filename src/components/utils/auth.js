// Funções de autenticação
export const authenticateUser = (username, password) => {
    // Lógica para autenticar o usuário
    // Substitua pela lógica de autenticação real
    return username === 'admin' && password === 'password';
};

export const isAuthenticated = () => {
    // Verifica se o usuário está autenticado
    return localStorage.getItem('user') !== null;
};

export const logout = () => {
    // Lógica para deslogar o usuário
    localStorage.removeItem('user');
};
