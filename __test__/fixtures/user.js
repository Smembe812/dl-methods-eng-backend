const faker = require('faker')

module.exports = function makeFakeUser() {
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