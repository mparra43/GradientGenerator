const baseUrl = process.env.REACT_APP_API_URL;


export const fetchApi = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        
        return fetch(url);
        
    } else if (data && method) {

        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}
