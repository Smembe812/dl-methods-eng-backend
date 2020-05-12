const makeUserModel = require('./model')
const makeUserService = require('./service')
const {define, ORM} = require('../db/')

const {makeFakeUser} = require('../../../__test__/fixtures/')


describe('technique data-access', () => {
    it('should create new technique', async (done) => {
            const User = makeUserModel({define, ORM})
            const service = makeUserService(User)
            const input = makeFakeUser()
            
            const {
                dataValues: {
                    id,
                    updatedAt,
                    createdAt,
                    ...userProps
                }
            } = await service.createOne(input)
            
            expect(userProps).toStrictEqual(input)
            done()
    });

    it('should get all techniques', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)

        const input = makeFakeUser()
        await service.createOne(input)
        const Users = await service.getAll()

        expect(Techniques.length > 0).toBe((true))
        done()
    })

    it('should get one technique by id', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)
        
        const input = makeFakeUser()
        const {dataValues: {id}, dataValues} = await service.createOne(input)
        const aTechnique = await service.getByID(id)

        expect(aTechnique.dataValues).toStrictEqual((dataValues))

        //expect({title, content}).toStrictEqual(input)
        done()
    })
    

    it('should update a technique', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)
        const input = makeFakeUser()
        
        const {dataValues: {id}} = await service.createOne(input)
    
        const input2 = Object.assign(makeFakeUser(), {id})

        const {title, aim, description, outcome} = input2

        let {...updatedValues} = await service.updateOne(input2)
         
        updatedValues = {
            title: updatedValues.title,
            aim: updatedValues.aim, 
            description: updatedValues.description, 
            outcome: updatedValues.outcome
        }

        expect(updatedValues).toStrictEqual({title, aim, description, outcome})
        done()
    })

    it('should delete a technique', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)
        const input = makeFakeUser()
        
        const {dataValues: {id}} = await service.createOne(input)

        let deleted = await service.deleteOne({id})

        expect(deleted).toStrictEqual(1)
        done()
    })

    it('should fail to delete a technique', async (done) => {
        const User = makeUserModel({define, ORM})
        const service = makeUserService(User)
        const input = makeFakeUser()
        
        const {dataValues: {id}} = await service.createOne(input)

        let deleted = await service.deleteOne({id: 10000})

        expect(deleted).toStrictEqual(0)
        done()
    })

    it.todo('should query/filter technique')
});
