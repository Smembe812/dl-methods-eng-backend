const {updateUser, createUser} = require('./index')
const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures')

describe('update user use-case', () => {
    it('should update user', async (done) => {
        const payload = makeFakeUser()
        const payload2 = makeFakeUser()

        try {
            const {...dataValues} = await createUser({method: "local", payload})

            /**
             * construct this object
             * {
             *  id, firstName, lastName, fullName, 
             *  middleName, userName, avatar, local, 
             *  { email, password}, methods, updatedAt, 
             *  google, email, password
             * }
             */
            const {
                createdAt,
                ...updatePayload
            } = Object.assign(dataValues, payload2)
            
            /**
             * construct this object
             * {firstName, lastName, userName, middleName, email, avatar, password }
             */
            const {id, ...rest} = Object.assign(
                payload2, 
                {id: updatePayload.id})

            const {...validUserProps} = userLocalMock(rest)

            const expectedUpdated = {id, createdAt, ...validUserProps}


            /**
             * construct this object
             * {id, title, createdAt, description, aim, how, when, whenNot, combinableWith}
             */

            const {updatedAt, google, ...updatedT} = await updateUser(updatePayload)

            expect(updatedT).toStrictEqual(expectedUpdated)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    it('must fail if id not provided', async (done) => {
        const payload = makeFakeUser()
        const payload2 = makeFakeUser()

        const {...dataValues} = await createUser({method: 'local', payload})

            /**
             * construct this object
             * {description, aim, how, when, whenNot, combinableWith}
             */
            const {
                id,
                createdAt,
                firstName,
                updatedAt, 
                ...updatePayload
            } = Object.assign(dataValues, payload2)

        await expect(updateUser(updatePayload))
            .rejects
            .toMatchObject({
                message:"could not find the user",
                status: 404
            })
        done()
    });

    it('must fail if id not found', async (done) => {
        const payload = makeFakeUser()
        const payload2 = makeFakeUser()

        const {...dataValues} = await createUser({method: 'local', payload})

            /**
             * construct this object
             * {description, aim, how, when, whenNot, combinableWith}
             */
            const {
                createdAt,
                updatedAt, 
                ...updatePayload
            } = Object.assign(dataValues, payload2, {id: 10000})

        await expect(updateUser(updatePayload))
            .rejects
            .toMatchObject({
                message:"could not find the user",
                status: 404
            })
        done()
    });

    it('must fail if username missing', async (done) => {
        const payload = makeFakeUser()
        const payload2 = makeFakeUser()

        const {...dataValues} = await createUser({method: 'local', payload})

            /**
             * construct this object
             * {description, aim, how, when, whenNot, combinableWith}
             */
            const {
                createdAt,
                updatedAt, 
                ...updatePayload
            } = Object.assign(dataValues, payload2, {userName: null})

            
        await expect(updateUser(updatePayload))
            .rejects
            .toMatchObject({message:"a user must have a username"})
        done()
    });
    
    
});
