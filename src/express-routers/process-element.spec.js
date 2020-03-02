const request = require('supertest')
const app = require('../')
const {makeFakeProcessElement} = require('../../__test__/fixtures')


describe('process elements routes', () => {
    let server;
    beforeEach( async (done) => {
        server = await app.listen('4400', () => {
            console.log('server up at 4400')
        })
        
        done()
    })

    afterEach( async (done) => await server.close(done));

    it('should post new process element', async (done) => {
        const fakeProcessElement = makeFakeProcessElement()
        request(server)
            .post('/api/process-elements')
            .send(fakeProcessElement)
            .end((error, response) => {
                const {dataValues: {title, aim, description, outcome}} = response.body
                

                expect(response.statusCode).toBe(201)
                expect({title, aim, description, outcome})
                    .toStrictEqual(fakeProcessElement)
                done()
            })
    });
    

    it('should get all process elementss', async (done) => {
        const fakeProcessElement = makeFakeProcessElement()
        request(server)
            .post('/api/process-elements')
            .send(fakeProcessElement)
            .then(()=>{

                request(server).get('/api/process-elements')
                .end((error, response) => {
                    
                    expect(response.statusCode).toBe(200)
                    done()
                })
            })
    })

    it('should get by id process elements', async (done) => {
        const fakeProcessElement = makeFakeProcessElement()

        const expected = await request(server)
            .post('/api/process-elements')
            .send(fakeProcessElement)

        const {dataValues: {id}, dataValues} = expected.body

        const received = await request(server).get(`/api/process-elements/${id}`)
        
        expect(received.statusCode).toBe(200)
        expect(received.body).toStrictEqual(dataValues)
        done()
    })

    it('should update by id process elementss', async (done) => {
        const fakeProcessElement = makeFakeProcessElement()
        const fakeProcessElementUpdate = makeFakeProcessElement()
        request(server)
            .post('/api/process-elements')
            .send(fakeProcessElement)
            .then((response)=>{
                const {dataValues: {id, createdAt}} = response.body

                request(server)
                .put(`/api/process-elements/${id}`)
                .send(fakeProcessElementUpdate)
                .end((error, response) => {
                    const expected = {
                        createdAt,
                        id,
                        ...fakeProcessElementUpdate
                    }

                    const {updatedAt, ...received} = response.body.updatedData
                    expect(response.statusCode).toBe(201)
                    expect(received).toStrictEqual(expected)
                    done()
                })
            })
    })

    it('should delete by id process elementss', async (done) => {
        const fakeProcessElement = makeFakeProcessElement()
        request(server)
            .post('/api/process-elements')
            .send(fakeProcessElement)
            .then((response)=>{
                const {dataValues: {id, createdAt}} = response.body

                request(server)
                .delete(`/api/process-elements/${id}`)
                .end((error, response) => {
                    const expected = {deleted: true, status: 201}
                    // {
                    //     message: "could not find the process elements",
                    //     status: 404,
                    // }

                    const received = response.body
                    expect(response.statusCode).toBe(201)
                    expect(received).toStrictEqual(expected)
                    done()
                })
            })
    })

    it('should fail to delete by id process elementss', async (done) => {
        const fakeProcessElement = makeFakeProcessElement()
        request(server)
            .post('/api/process-elements')
            .send(fakeProcessElement)
            .then((response)=>{
                const {dataValues: {id, createdAt}} = response.body

                request(server)
                .delete(`/api/process-elements/1000`)
                .end((error, response) => {
                    const expected = {
                        message: "could not find the process element",
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
