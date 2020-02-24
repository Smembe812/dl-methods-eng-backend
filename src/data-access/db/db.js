module.exports = ({ORM, url}) => {
    return () => {    
        
        const connection = DB(url)
        
        function DB(url) {
            try {
                return new ORM(url)
                
            } catch (error) {
                return Promise.reject(error)
            }
        }


        async function isConnect(){
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
            isConnect,
            Model,
            define,
            ORM
        })
    }
}