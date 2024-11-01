// Modelo de sessão - simulação
class Session {
    constructor(userId) {
        this.userId = userId;
        this.createdAt = new Date();
    }
}

module.exports = Session;

