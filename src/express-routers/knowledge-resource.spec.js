const request = require('supertest')
const server = require('../server')('4000')

afterEach( async (done) => await server.close(done));

describe('Knowledge Resource routes', () => {
    it('should post new kr', async (done) => {
        request(server)
            .post('/api/knowledge-resources')
            .send({
                title: 'This is title',
                content: "this is some content"
            })
            .end((error, response) => {
                expect(response.statusCode).toBe(201)
                expect(response.body).toStrictEqual({ status: 201,
                    knowledgeResource: { title: 'This is title', content: 'this is some content' } })
                done()
            })
    });
    
});
