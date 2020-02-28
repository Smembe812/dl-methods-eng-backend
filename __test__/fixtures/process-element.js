const faker = require('faker')

module.exports = function makeFakeProcessElement() {
    const processElement = {
        title: faker.lorem.sentence(),
        aim: faker.lorem.paragraph(), 
        description: faker.lorem.paragraphs(4), 
        outcome: faker.lorem.sentence()
    }
    return {...processElement}
}