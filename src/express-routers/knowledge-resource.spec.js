const request = require('supertest')
const app = require('../')

describe('Knowledge Resource routes', () => {
    let server;
    beforeEach( async (done) => {
        server = await app.listen('4400', () => {
            console.log('server up at 4400')
        })
        
        done()
    })

    afterEach( async (done) => await server.close(done));

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
