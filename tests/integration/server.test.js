const request = require('supertest');
const app = require('../server/index'); // Altere para o caminho correto do seu arquivo index.js

describe('GET /api/users', () => {
    it('should return a list of users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});

describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({ username: 'testuser', password: 'password123' });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Usuário registrado com sucesso');
    });
});

