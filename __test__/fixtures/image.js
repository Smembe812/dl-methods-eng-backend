const fs = require('fs')

module.exports = () => {
    const fakeImage = fs.readFileSync(`${__dirname}/image.jpg`)
    return fakeImage
}