const faker = require('faker')

module.exports = function makeFile() {
    const public_id = faker.lorem.word()
    const file = {
        title: faker.lorem.sentence(),
        image: {
            public_id,
            version: 1336304441,
            signature: 'abcde20044f8c8ba71fb31ebe81e9d72ec8763dd',
            width: 100,
            height: 100,
            format: 'jpg',
            resource_type: 'image',
            url: 'http://res.cloudinary.com/demo/image/upload/v1336304441/sample_remote.jpg',
            secure_url: 'https://d3jpl91pxevbkh.cloudfront.net/demo/image/upload/v1336304441/sample_remote.jpg'
        },
        public_id
    }
    return {...file}
}