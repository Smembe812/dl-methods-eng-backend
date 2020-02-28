const {createOneProcessElement} = require('./index')
const {makeFakeProcessElement} = require('../../../__test__/fixtures')

describe('create process element', () => {
    it('should create new process element in db', async (done) => {
        const payload = makeFakeProcessElement()

        const {dataValues: {title, aim, description, outcome}} = await createOneProcessElement(payload)
        
        expect({title, aim, description, outcome}).toStrictEqual(payload)
        
        done()

    });

    it('must fail if title missing', async (done) => {
        const {aim, description, outcome} = makeFakeProcessElement()
        const payload = {title: null, aim, description, outcome}

        await expect(createOneProcessElement(payload))
            .rejects
            .toMatchObject({message:"a process element must have title"})
        done()
    });

    // it('must fail if content missing', async (done) => {
    //     const {title, content} = makeFakeProcessElement()
    //     const payload = {title, content: null}

    //     await expect(createOneProcessElement(payload))
    //         .rejects
    //         .toMatchObject({message:"a process element must have some content"})
    //     done()
    // });
    
    
});
