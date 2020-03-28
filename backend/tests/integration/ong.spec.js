const request = require('supertest');
const connection = require('../../src/database/connection');

const app = require('../../src/app');


describe('ONG',()=>{
    beforeEach(
        async () => {
            await connection.migrate.latest();
        }
    );
    
    afterAll(async ()=>{
        await connection.destroy();
    });
    let ongId = '';
    it('should be able to create a new ONG', async ()=>{
        const response = await request(app).post('/ongs')
        .send({
            name: "HGJ",
            email: "contato@contato.com",
            whatsapp: "6298443113",
            city: "Campos Belos",
            uf: "GO"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        ongId = response.body.id;
    });
    it('should be able to login', async ()=>{
        const response = await request(app).post('/session')
        .send({
            id: ongId
        });
        expect(response.status).toBe(200);
    });
});