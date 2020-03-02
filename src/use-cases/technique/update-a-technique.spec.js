const {updateTechnique, createOneTechnique} = require('./index')
const {makeFakeTechnique} = require('../../../__test__/fixtures')

describe('update technique use case', () => {
    it('should update technique', async (done) => {
        const payload = makeFakeTechnique()
        const payload2 = makeFakeTechnique()

        try {
            const {dataValues} = await createOneTechnique(payload)

            /**
             * construct this object
             * {id, title, updatedAt, description, aim, how, when, whenNot, combinableWith}
             */
            const {
                createdAt, 
                ...updatePayload
            } = Object.assign(dataValues, payload2)
            
            /**
             * construct this object
             * {id, title, createdAt, description, aim, how, when, whenNot, combinableWith}
             */
            const expectedUpdated = Object.assign(
                {createdAt}, 
                payload2, 
                {id: updatePayload.id})

            /**
             * construct this object
             * {id, title, createdAt, description, aim, how, when, whenNot, combinableWith}
             */

            const {updatedAt, ...updatedT} = await updateTechnique(updatePayload)
            
            expect(updatedT).toStrictEqual(expectedUpdated)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    it('must fail if id not provided', async (done) => {
        const payload1 = makeFakeTechnique()
        const payload2 = makeFakeTechnique()

        const {dataValues} = await createOneTechnique(payload1)

            /**
             * construct this object
             * {description, aim, how, when, whenNot, combinableWith}
             */
            const {
                id,
                createdAt,
                title,
                updatedAt, 
                ...updatePayload
            } = Object.assign(dataValues, payload2)

        await expect(updateTechnique(updatePayload))
            .rejects
            .toMatchObject({
                message:"could not find the technique",
                status: 404
            })
        done()
    });

    it('must fail if id not found', async (done) => {
        const payload1 = makeFakeTechnique()
        const payload2 = makeFakeTechnique()

        const {dataValues} = await createOneTechnique(payload1)

            /**
             * construct this object
             * {description, aim, how, when, whenNot, combinableWith}
             */
            const {
                createdAt,
                updatedAt, 
                ...updatePayload
            } = Object.assign(dataValues, payload2, {id: 10000})

        await expect(updateTechnique(updatePayload))
            .rejects
            .toMatchObject({
                message:"could not find the technique",
                status: 404
            })
        done()
    });

    it('must fail if title missing', async (done) => {
        const payload1 = makeFakeTechnique()
        const payload2 = makeFakeTechnique()

        const {dataValues} = await createOneTechnique(payload1)

            /**
             * construct this object
             * {description, aim, how, when, whenNot, combinableWith}
             */
            const {
                createdAt,
                updatedAt, 
                ...updatePayload
            } = Object.assign(dataValues, payload2, {title: null})

        await expect(updateTechnique(updatePayload))
            .rejects
            .toMatchObject({message:"a technique must have title"})
        done()
    });
    
    
});
