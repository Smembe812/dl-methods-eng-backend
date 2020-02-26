const app = require('./')
const request = require('supertest')

describe('Testing app', () => {
    let server
    beforeEach( async (done)=> {
        server = await app.listen('4400', () => {})

        app.get('/test', (req, res) => {
            res.json({
                message: "testing hello"
            })
        })
        done()
    })

    afterEach( async (done) => {
        server.close(done)
    })

    it('should serve app', async (done) => {
        await request(server)
            .get('/test')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((error, response) => {
                done()
            })
        
        done()
    });

    it('should fail to serve', async (done) => {
        await request(server)
            .get('/tes')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(404)
            .then((error, response) => {})
        
        done()
    })
    
});
