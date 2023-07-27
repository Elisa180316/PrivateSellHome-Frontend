const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

//The request function is defined as an asynchronous function with the following parameters:
// url: The URL to which the request is made. 
// method: The HTTP method of the request (GET, POST, PUT, DELETE).
// headers: An object containing any additional headers to be included in the request.
// body: The request payload or data. It is an empty object by default.
// isNotStringified: A boolean flag indicating whether the body should be stringified as JSON or not. It is false by default.//
export const request = async (url, method, headers = {}, body = {}, isNotStringified = false) => {
    let res
    let data
    switch (method) {
// For the GET method:
// The fetch function is used to make a GET request to the specified URL with the provided headers.
// If the response status is not 200 (OK) or 201 (Created), an error is thrown.
// The response is parsed as JSON using res.json(), and the parsed data is returned.
        case 'GET':
            res = await fetch(BASE_URL + url, { headers })
            if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
            data = await res.json()
            return data

//For the POST method:
// There are two cases to handle based on the isNotStringified flag:
// If isNotStringified is true, the request is made with the provided headers, method, and body.
// If isNotStringified is false, the request is made with the provided headers, method, and the body stringified as JSON.
// If the response status is not 200 (OK) or 201 (Created), an error is thrown.
// The response is parsed as JSON using res.json(), and the parsed data is returned.
        case 'POST':
           
            if (isNotStringified) {
                res = await fetch(BASE_URL + url, { headers, method, body })
                if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
                data = await res.json()
            } else {
                    res = await fetch(BASE_URL + url, { headers, method, body: JSON.stringify({ ...body }) })
                    if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
                    data = await res.json()
            }
            return data

// For the PUT method:
// The request is made with the provided headers, method, and the body stringified as JSON.
// If the response status is not 200 (OK) or 201 (Created), an error is thrown.
// The response is parsed as JSON using res.json(), and the parsed data is returned.
        case 'PUT':
            res = await fetch(BASE_URL + url, { headers, method, body: JSON.stringify(body) })
            if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
            data = await res.json()
            return data

// For the DELETE method:
// The request is made with the provided headers and method.
// If the response status is not 200 (OK) or 201 (Created), an error is thrown.
// The response is parsed as JSON using res.json(), and the parsed data is returned.
        case 'DELETE':
            res = await fetch(BASE_URL + url, { headers, method })
            if(res.status !== 200 && res.status !== 201) throw new Error("ERROR")
            data = await res.json()
            return data
        default:
            return
    }
}

//Defines a function called request that is used to make HTTP requests to a specified URL using different methods (GET, POST, PUT, DELETE). The requests are made to a base URL defined as http://localhost:5000, and the function returns the parsed JSON response from the server.