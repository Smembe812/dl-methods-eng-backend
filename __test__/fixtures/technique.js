const faker = require('faker')

module.exports = function makeFakeTechnique() {
    const technique = {
        title: faker.lorem.sentence(),
        aim: faker.lorem.paragraph(), 
        description: faker.lorem.paragraphs(4),
        how: faker.lorem.paragraphs(4), 
        when: faker.lorem.paragraph(),
        whenNot: faker.lorem.paragraph(),
        combinableWith: faker.lorem.sentences(3)

    }
    return {...technique}
}