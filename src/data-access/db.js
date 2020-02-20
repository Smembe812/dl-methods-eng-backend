module.exports = ({orm, url}) => {
    async function connect(){
        const connection = new orm(url)

        try {
            const isConnected = await connection.authenticate()

            return Promise.resolve(true)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return Object.freeze({
        connect
    })
}