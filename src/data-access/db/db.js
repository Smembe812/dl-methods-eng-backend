module.exports = ({ORM, url}) => {

    return () => {

        const connection = new ORM(url)
        
        async function connect(){
            try {
                const isConnected = await connection.authenticate()
    
                return Promise.resolve(true)
            } catch (error) {
                return Promise.reject(error)
            }
        }
    
        function Model (){
            return ORM.Model
        }

        function define(name, props, options = null){
            return connection.define(name, props, options)
        }
    
        return Object.freeze({
            connect,
            Model,
            define,
            ORM
        })
    }
}