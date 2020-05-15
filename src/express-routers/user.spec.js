const request = require('supertest')
const app = require('../')
const {makeFakeUser, userLocalMock} = require('../../__test__/fixtures')


describe('users routes', () => {
    let server;
    beforeEach( async (done) => {
        server = await app.listen('4400', () => {
            console.log('server up at 4400')
        })
        
        done()
    })

    afterEach( async (done) => await server.close(done));

    it('should post new users', async (done) => {
        const fakeUser = makeFakeUser()
        const {
            firstName, 
            lastName, 
            fullName, 
            middleName, 
            userName, 
            avatar} = userLocalMock(fakeUser)
        request(server)
            .post('/api/users')
            .send({...fakeUser, method: 'local'})
            .end((error, response) => {
                const {
                    id, 
                    createdAt, 
                    updatedAt,
                    ...userProps
                } = response.body
                

                expect(response.statusCode).toBe(201)
                expect({...userProps})
                    .toStrictEqual({
                        firstName, 
                        lastName, 
                        fullName, 
                        middleName, 
                        userName, 
                        avatar,
                        status: 201
                    })
                done()
            })
    });
    

    it('should get all users', async (done) => {
        const fakeUser = makeFakeUser()
        request(server)
            .post('/api/users')
            .send({...fakeUser, method: 'local'})
            .then(()=>{

                request(server).get('/api/users')
                .end((error, response) => {
                    
                    expect(response.statusCode).toBe(200)
                    done()
                })
            })
    })

    it('should get by id users', async (done) => {
        const fakeUser = makeFakeUser()

        const expected = await request(server)
            .post('/api/users')
            .send({...fakeUser, method: 'local'})

        const {id, status, ...dataValues} = expected.body

        const {statusCode, body} = await request(server).get(`/api/users/${id}`)
        
        expect(statusCode).toBe(200)
        expect(body).toStrictEqual({id, methods:'local', ...dataValues})
        done()
    })

    it('should update by id users', async (done) => {
        const fakeUser = makeFakeUser()
        const fakeUserUpdate = makeFakeUser()
        const {avatar, firstName, fullName, middleName, userName, lastName} = userLocalMock(fakeUserUpdate)
        request(server)
            .post('/api/users')
            .send({...fakeUser, method: 'local'})
            .then((response)=>{
                const {id, createdAt} = response.body

                request(server)
                .put(`/api/users/${id}`)
                .send(fakeUserUpdate)
                .end((error, response) => {
                    const expected = {
                        createdAt,
                        id,
                        avatar, firstName, fullName, middleName, userName, lastName
                    }
                    console.warn(response.body)
                    const {updatedAt, google, methods, local, ...received} = response.body.updatedData
                    expect(response.statusCode).toBe(201)
                    expect(received).toStrictEqual(expected)
                    done()
                })
            })
    })

    it('should delete by id users', async (done) => {
        const fakeUser = makeFakeUser()
        request(server)
            .post('/api/users')
            .send({...fakeUser, method: 'local'})
            .then((response)=>{
                const {id, createdAt} = response.body

                request(server)
                .delete(`/api/users/${id}`)
                .end((error, response) => {
                    const expected = {deleted: true, status: 201}
                    const received = response.body
                    expect(response.statusCode).toBe(201)
                    expect(received).toStrictEqual(expected)
                    done()
                })
            })
    })

    it('should fail to delete by id users', async (done) => {
        const fakeUser = makeFakeUser()
        request(server)
            .post('/api/users')
            .send({...fakeUser, method: 'local'})
            .then((response)=>{
                const {id, createdAt} = response.body

                request(server)
                .delete(`/api/users/1000`)
                .end((error, response) => {
                    const expected = {
                        message: "could not find the user",
                        status: 404,
                    }

                    const received = response.body
                    expect(response.statusCode).toBe(404)
                    expect(received.errors[0]).toMatchObject(expected)
                    done()
                })
            })
    })

    it.todo("should authenticate user")
});
