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

    it('should get by id knowledge resources', async (done) => {
        request(server)
            .post('/api/knowledge-resources')
            .send({
                title: 'This is title',
                content: "this is some content"
            })
            .then((response)=>{
                const {dataValues} = response.body

                request(server).get(`/api/knowledge-resources/${dataValues.id}`)
                .end((error, response) => {
                    expect(response.statusCode).toBe(200)
                    expect(response.body).toStrictEqual(dataValues)
                    done()
                })
            })
    })

    it('should update by id knowledge resources', async (done) => {
        request(server)
            .post('/api/knowledge-resources')
            .send({
                title: 'This is title',
                content: "this is some content"
            })
            .then((response)=>{
                const {dataValues: {id, createdAt}} = response.body

                request(server)
                .put(`/api/knowledge-resources/${id}`)
                .send({
                    title: 'This is updated title',
                    content: "this is some updated content"
                })
                .end((error, response) => {
                    const expected = {
                        createdAt,
                        id,
                        title: 'This is updated title',
                        content: "this is some updated content"
                    }

                    const {updatedAt, ...received} = response.body.updatedData
                    expect(response.statusCode).toBe(201)
                    expect(received).toStrictEqual(expected)
                    done()
                })
            })
    })

    it('should delete by id knowledge resources', async (done) => {
        request(server)
            .post('/api/knowledge-resources')
            .send({
                title: 'This is title',
                content: "this is some content"
            })
            .then((response)=>{
                const {dataValues: {id, createdAt}} = response.body

                request(server)
                .delete(`/api/knowledge-resources/${id}`)
                .end((error, response) => {
                    const expected = {deleted: true, status: 201}
                    // {
                    //     message: "could not find the knowledge resource",
                    //     status: 404,
                    // }

                    const received = response.body
                    expect(response.statusCode).toBe(201)
                    expect(received).toStrictEqual(expected)
                    done()
                })
            })
    })

    it('should fail to delete by id knowledge resources', async (done) => {
        request(server)
            .post('/api/knowledge-resources')
            .send({
                title: 'This is title',
                content: "this is some content"
            })
            .then((response)=>{
                const {dataValues: {id, createdAt}} = response.body

                request(server)
                .delete(`/api/knowledge-resources/1000`)
                .end((error, response) => {
                    const expected = {
                        message: "could not find the knowledge resource",
                        status: 404,
                    }

                    const received = response.body
                    expect(response.statusCode).toBe(404)
                    expect(received.errors[0]).toMatchObject(expected)
                    done()
                })
            })
    })
});
