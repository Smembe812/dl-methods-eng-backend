const makeUserModel = require('./model')
const makeUserService = require('./service')
const {define, ORM} = require('../db/')

const {makeFakeUser, userLocalMock} = require('../../../__test__/fixtures/')


describe('user data-access', () => {
    it('should create new user', async (done) => {
            const User = makeUserModel({define, ORM})
            const service = makeUserService(User)
            const input = makeFakeUser()
            const dbInput = userLocalMock(input)

            const {
                dataValues: {
                    id,
                    updatedAt,
                    createdAt,
                    google,
                    ...userProps
                }
            } = await service.createOne(dbInput)

            expect(userProps).toStrictEqual(dbInput)
            done()
    });

    it('should get all users', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)

        const input = makeFakeUser()
        const dbInput = userLocalMock(input)

        await service.createOne(dbInput)
        const Users = await service.getAll()

        expect(Users.length > 0).toBe((true))
        done()
    })

    it('should get one user by id', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)
        
        const input = makeFakeUser()
        const dbInput = userLocalMock(input)

        const {dataValues: {id}, dataValues} = await service.createOne(dbInput)
        const aUser = await service.getByID(id)

        expect(aUser.dataValues).toStrictEqual((dataValues))

        //expect({title, content}).toStrictEqual(input)
        done()
    })
    

    it('should update a user', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)
        
        const input = makeFakeUser()
        const dbInput = userLocalMock(input)
        
        const {dataValues: {id}} = await service.createOne(dbInput)
    
        const input2 = Object.assign(makeFakeUser(), {id})

        const {firstName, lastName, middleName} = input2

        let {...updatedValues} = await service.updateOne(input2)
         
        updatedValues = {
            firstName: updatedValues.firstName,
            lastName: updatedValues.lastName, 
            middleName: updatedValues.middleName, 
        }

        expect(updatedValues).toStrictEqual({firstName, lastName, middleName})
        done()
    })

    it('should delete a user', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)
        
        const input = makeFakeUser()
        const dbInput = userLocalMock(input)
        
        const {dataValues: {id}} = await service.createOne(dbInput)

        let deleted = await service.deleteOne({id})

        expect(deleted).toStrictEqual(1)
        done()
    })

    // it('should fail to delete a technique', async (done) => {
    //     const User = makeUserModel({define, ORM})
    //     const service = makeUserService(User)
    //     const input = makeFakeUser()
        
    //     const {dataValues: {id}} = await service.createOne(input)

    //     let deleted = await service.deleteOne({id: 10000})

    //     expect(deleted).toStrictEqual(0)
    //     done()
    // })

    // it.todo('should query/filter technique')
});
