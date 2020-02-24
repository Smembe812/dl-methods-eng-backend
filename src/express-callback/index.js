function makeExpressCallback(controller){
    return (req, res, next) => {
        const {params, query, method, path, body} = req

        const httpRequest = {
            params, query, method, path, body
        }

        controller(httpRequest)
            .then( httpResponse => {
                if (httpResponse.status){
                    return res.status(httpResponse.status).json(httpResponse)
                }

                else {
                    return res.json(httpResponse)
                }
            })
            .catch( error => next(error))
    }
} 

module.exports = makeExpressCallback