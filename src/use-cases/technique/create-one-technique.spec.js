const {createOneTechnique} = require('./index')
const {makeFakeTechnique} = require('../../../__test__/fixtures')

describe('create technique', () => {
    it('should create new technique in db', async (done) => {
        const payload = makeFakeTechnique()

        const {dataValues: {
            createdAt,
            updatedAt,
            id,
            ...techniqueProps
        }} = await createOneTechnique(payload)
        
        expect(techniqueProps).toStrictEqual(payload)
        
        done()

    });

    it('must fail if title missing', async (done) => {
        const {title, ...otherProps} = makeFakeTechnique()

        await expect(createOneTechnique(otherProps))
            .rejects
            .toMatchObject({message:"a technique must have title"})
        done()
    });

    it('must fail if description missing', async (done) => {
        const {description, ...otherProps} = makeFakeTechnique()

        await expect(createOneTechnique(otherProps))
            .rejects
            .toMatchObject({message:"a technique must have a description"})
        done()
    });
    
    
});
