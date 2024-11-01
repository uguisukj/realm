import axios from 'axios';

// Configuração da base URL para chamadas à API
const api = axios.create({
    baseURL: 'https://api.exemplo.com', // Substitua pela sua URL da API
});

// Função para fazer uma chamada GET
export const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error; // Propaga o erro
    }
};

// Função para fazer uma chamada POST
export const postData = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        throw error; // Propaga o erro
    }
};

