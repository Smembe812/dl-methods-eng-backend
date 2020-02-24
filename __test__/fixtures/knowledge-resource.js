const faker = require('faker')

module.exports = function makeFakeKnowledgeResource() {
    const knowledgeResource = {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(3)
    }
    return {...knowledgeResource}
}