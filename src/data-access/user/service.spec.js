const makeUserModel = require('./model')
const makeUserService = require('./service')
const {define, ORM, Op} = require('../db/')

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

    it('should fail to delete a user', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)

        const input = makeFakeUser()
        const dbInput = userLocalMock(input)
        
        const {dataValues: {id}} = await service.createOne(dbInput)

        let deleted = await service.deleteOne({id: 10000})

        expect(deleted).toStrictEqual(0)
        done()
    })

    it('should get user by email', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService({User, Op})

        const input = makeFakeUser()
        const dbInput = userLocalMock(input)
        
        const {dataValues: { local: {email}}} = await service.createOne(dbInput)

        let {dataValues: {google, createdAt, id, updatedAt, ...user}} = await service.findOne({local: {email}})

        expect((user)).toStrictEqual(dbInput)
        done()
    })

    // it.todo('should query/filter technique')
});
