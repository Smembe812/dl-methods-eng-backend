const {deleteUser, createUser} = require('./index')
const {makeFakeUser} = require('../../../__test__/fixtures')

describe('delete user use-case', () => {
    it('should delete user', async (done) => {
        const payload = makeFakeUser()

        try {
            const {id} = await createUser({method: "local", payload})

            const deleted = await deleteUser(id)
            
            expect(deleted).toStrictEqual(1)
            
            done()
        } catch (error) {
            done(error)
        }

    });

    it('should fail when deleting invalid user', async (done) => {
        const payload = makeFakeUser()

        
        const {id} = await createUser({method: "local", payload})

        
        await expect(deleteUser(100000))
            .rejects
            .toMatchObject(
                {
                    message: "could not find the user",
                    status: 404,
                })
        
        done()
    });
    
    
});
