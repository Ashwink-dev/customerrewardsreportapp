import Axios from 'axios'


const BaseURL = process.env.REACT_APP_BASEURL
async function APIWrapper(method, path, payload = null, sendContentType = false) {
    let headers = {}

    if (sendContentType) {
        headers = {
            'content-type': 'application/json;'
        }
    }
    
    const options = {
        method: method,
        url: BaseURL + path,
        headers: headers,
        data: payload
    }

    let retValue
    await Axios(options).then(response => {
        // Handle response
        retValue = response
    })
        .catch(error => {
            if (error.response !== undefined) {
                if (error.response.status === 401) {
                } else {
                    return Promise.reject(error)
                }
            } else {
                return Promise.reject(error)
            }
        })

    return retValue
}

export default APIWrapper