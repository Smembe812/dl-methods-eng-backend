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

    it('should post new knowledge resource', async (done) => {
        request(server)
            .post('/api/knowledge-resources')
            .send({
                title: 'This is title',
                content: "this is some content"
            })
            .end((error, response) => {
                console.log(response.statusCode)
                const {dataValues: {title, content}} = response.body
                expect(response.statusCode).toBe(201)
                expect({title, content}).toStrictEqual({
                    title: 'This is title',
                    content: "this is some content"
                })
                done()
            })
    });
    

    it('should get all knowledge resources', async (done) => {
        request(server)
            .post('/api/knowledge-resources')
            .send({
                title: 'This is title',
                content: "this is some content"
            })
            .then(()=>{

                request(server).get('/api/knowledge-resources')
                .end((error, response) => {
                    expect(response.statusCode).toBe(200)
                    done()
                })
            })
    })
});
