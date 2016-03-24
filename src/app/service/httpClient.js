import fetch from 'isomorphic-fetch'

export const get = (url) => {
    return fetch(url);
};

export const post = (url, data) => {
    return makeBodiedRequest(url, 'POST', data);
};
export const put = (url, data) => {
    return makeBodiedRequest(url, 'PUT', data);
};

function makeBodiedRequest(url, method, data) {
    const json = JSON.stringify(data);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    return fetch(url, {
        method,
        headers,
        body: json
    })
}