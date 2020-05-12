const faker = require('faker')

module.exports = {makeFakeUser, userLocalMock}

function makeFakeUser() {
    const user = {
        firstName: faker.name.findName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        middleName: faker.name.firstName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        password: faker.internet.password()
    }

    return {...user}
}

function userLocalMock(userInput){
    const {
        firstName,
        lastName,
        userName,
        middleName,
        email,
        avatar,
        password } = userInput

    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`
    const local = {password, email}
    
    const mockUser = {
        firstName,
        lastName,
        middleName,
        fullName,
        userName,
        avatar,
        local
    }

    return {...mockUser}
}