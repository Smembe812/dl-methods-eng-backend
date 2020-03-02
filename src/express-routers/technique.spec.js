const request = require('supertest')
const app = require('../')
const {makeFakeTechnique} = require('../../__test__/fixtures')


describe('techniques routes', () => {
    let server;
    beforeEach( async (done) => {
        server = await app.listen('4400', () => {
            console.log('server up at 4400')
        })
        
        done()
    })

    afterEach( async (done) => await server.close(done));

    it('should post new techniques', async (done) => {
        const fakeTechnique = makeFakeTechnique()
        request(server)
            .post('/api/techniques')
            .send(fakeTechnique)
            .end((error, response) => {
                const {dataValues: {
                    id, 
                    createdAt, 
                    updatedAt, 
                    ...techniqueProps
                }} = response.body
                

                expect(response.statusCode).toBe(201)
                expect({...techniqueProps})
                    .toStrictEqual(fakeTechnique)
                done()
            })
    });
    

    it('should get all techniquess', async (done) => {
        const fakeTechnique = makeFakeTechnique()
        request(server)
            .post('/api/techniques')
            .send(fakeTechnique)
            .then(()=>{

                request(server).get('/api/techniques')
                .end((error, response) => {
                    
                    expect(response.statusCode).toBe(200)
                    done()
                })
            })
    })

    it('should get by id techniques', async (done) => {
        const fakeTechnique = makeFakeTechnique()

        const expected = await request(server)
            .post('/api/techniques')
            .send(fakeTechnique)

        const {dataValues: {id}, dataValues} = expected.body

        const received = await request(server).get(`/api/techniques/${id}`)
        
        expect(received.statusCode).toBe(200)
        expect(received.body).toStrictEqual(dataValues)
        done()
    })

    it('should update by id techniquess', async (done) => {
        const fakeTechnique = makeFakeTechnique()
        const fakeTechniqueUpdate = makeFakeTechnique()
        request(server)
            .post('/api/techniques')
            .send(fakeTechnique)
            .then((response)=>{
                const {dataValues: {id, createdAt}} = response.body

                request(server)
                .put(`/api/techniques/${id}`)
                .send(fakeTechniqueUpdate)
                .end((error, response) => {
                    const expected = {
                        createdAt,
                        id,
                        ...fakeTechniqueUpdate
                    }

                    const {updatedAt, ...received} = response.body.updatedData
                    expect(response.statusCode).toBe(201)
                    expect(received).toStrictEqual(expected)
                    done()
                })
            })
    })

    it('should delete by id techniques', async (done) => {
        const fakeTechnique = makeFakeTechnique()
        request(server)
            .post('/api/techniques')
            .send(fakeTechnique)
            .then((response)=>{
                const {dataValues: {id, createdAt}} = response.body

                request(server)
                .delete(`/api/techniques/${id}`)
                .end((error, response) => {
                    const expected = {deleted: true, status: 201}
                    const received = response.body
                    expect(response.statusCode).toBe(201)
                    expect(received).toStrictEqual(expected)
                    done()
                })
            })
    })

    it('should fail to delete by id techniquess', async (done) => {
        const fakeTechnique = makeFakeTechnique()
        request(server)
            .post('/api/techniques')
            .send(fakeTechnique)
            .then((response)=>{
                const {dataValues: {id, createdAt}} = response.body

                request(server)
                .delete(`/api/techniques/1000`)
                .end((error, response) => {
                    const expected = {
                        message: "could not find the technique",
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
