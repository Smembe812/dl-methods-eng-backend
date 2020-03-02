const {postTechniqueController} = require('./')
const {makeFakeTechnique} = require('../../../__test__/fixtures')

describe('post technique controller', () => {
    it('succesfully post new technique', async (done) => {

        const fakeTechniquePost = makeFakeTechnique()

        const {dataValues: {
                id,
                createdAt,
                updatedAt,
                ...restOfProps
            }
        } = await postTechniqueController({body: fakeTechniquePost})

        expect({...restOfProps}).toStrictEqual(fakeTechniquePost)

        done()
        
    })
    it('should error at faliure', async (done) => {

        const {title, ...restOfProps} = makeFakeTechnique()


        await expect(postTechniqueController({body: {...restOfProps}}))
                    .rejects
                    .toEqual(expect.any(Error))
        done()
    })
});
