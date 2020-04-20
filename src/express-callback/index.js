function makeExpressCallback(controller){
    return (req, res, next) => {
        let httpRequest;
        const {params, query, method, path, body, file} = req

        if (file){
            httpRequest = {
                params, query, method, path, body, file
            }
        }else{
            httpRequest = {
                params, query, method, path, body
            }
        }

        controller(httpRequest, next)
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