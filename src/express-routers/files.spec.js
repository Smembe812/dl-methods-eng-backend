const request = require('supertest')
const app = require('../')
const {makeFakeFile} = require('../../__test__/fixtures')


describe('file routes', () => {
    let server;
    beforeEach( async (done) => {
        server = await app.listen('4400', () => {
            console.log('server up at 4400')
        })
        
        done()
    })

    afterEach( async (done) => await server.close(done));

    it('should post new file', async (done) => {
        const fakeFile = makeFakeFile()
        request(server)
            .post('/api/files')
            .attach("file", `${__dirname}/../../__test__/fixtures/image.jpg`)
            .end((error, response) => {
                const {dataValues: {
                    id, 
                    createdAt, 
                    updatedAt, 
                    ...fileProps
                }} = response.body
                

                expect(response.statusCode).toBe(201)
                expect(({...fileProps}).hasOwnProperty("image"))
                    .toBe(true)
                done()
            })
    });
    

    it('should get all files', async (done) => {
        const fakeFile = makeFakeFile()
        request(server)
            .post('/api/files')
            .attach("file", `${__dirname}/../../__test__/fixtures/image.jpg`)
            .then(()=>{
                request(server).get('/api/files')
                .end((error, response) => {
                    
                    expect(response.statusCode).toBe(200)
                    done()
                })
            })
    })

    // it('should get by id files', async (done) => {
    //     const fakeFile = makeFakeFile()

    //     const expected = await request(server)
    //         .post('/api/files')
    //         .send(fakeFile)

    //     const {dataValues: {id}, dataValues} = expected.body

    //     const received = await request(server).get(`/api/files/${id}`)
        
    //     expect(received.statusCode).toBe(200)
    //     expect(received.body).toStrictEqual(dataValues)
    //     done()
    // })

    // // it('should update by id files', async (done) => {
    // //     const fakeFile = makeFakeFile()
    // //     const fakeFileUpdate = makeFakeFile()
    // //     request(server)
    // //         .post('/api/files')
    // //         .send(fakeFile)
    // //         .then((response)=>{
    // //             const {dataValues: {id, createdAt}} = response.body

    // //             request(server)
    // //             .put(`/api/files/${id}`)
    // //             .send(fakeFileUpdate)
    // //             .end((error, response) => {
    // //                 const expected = {
    // //                     createdAt,
    // //                     id,
    // //                     ...fakeFileUpdate
    // //                 }

    // //                 const {updatedAt, ...received} = response.body.updatedData
    // //                 expect(response.statusCode).toBe(201)
    // //                 expect(received).toStrictEqual(expected)
    // //                 done()
    // //             })
    // //         })
    // // })

    it('should delete by id files', async (done) => {
        const fakeFile = makeFakeFile()
        request(server)
            .post('/api/files')
            .attach("file", `${__dirname}/../../__test__/fixtures/image.jpg`)
            .then((response)=>{
                const {dataValues: {id, public_id}} = response.body
                
                request(server)
                .delete(`/api/files/${public_id}`)
                .end((error, response) => {
                    const expected = {deleted: true, status: 201}
                    const received = response.body
                    expect(response.statusCode).toBe(201)
                    expect(received).toStrictEqual(expected)
                    done()
                })
            })
    })

    // it('should fail to delete by id files', async (done) => {
    //     const fakeFile = makeFakeFile()
    //     request(server)
    //         .post('/api/files')
    //         .send(fakeFile)
    //         .then((response)=>{
    //             const {dataValues: {id, createdAt}} = response.body

    //             request(server)
    //             .delete(`/api/files/1000`)
    //             .end((error, response) => {
    //                 const expected = {
    //                     message: "could not find the technique",
    //                     status: 404,
    //                 }

    //                 const received = response.body
    //                 expect(response.statusCode).toBe(404)
    //                 expect(received.errors[0]).toMatchObject(expected)
    //                 done()
    //             })
    //         })
    // })
});
