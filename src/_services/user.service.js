// import { authHeader } from "../_helpers";

export const userService = {
    login,
    logout,
    getAll
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password })
    }
    return fetch(`${process.env.REACT_APP_API_URL}/auth`, requestOptions)
        .then(handleResponse)
        .then(data => {
            if (data.error) {
                return Promise.reject(data.message)
            }
            return data
        })

}
function logout() {
    localStorage.removeItem('user');
}
function getAll() {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: authHeader,
    // }
    // fetch(`${process.env.REACT_APP_API_URL}/g`)
}
function handleResponse(response) {
    console.log(response)
    const data = response.json()

    if (response.status !== 200) {
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload('/login')
            }
            const error = response.statusText
            return Promise.reject(error)
        }
    }
    return data

}