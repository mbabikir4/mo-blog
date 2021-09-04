import { Redirect} from "react-router";
export const getToken = () => {
    const token = sessionStorage.getItem('token');
    return token

}

export const isAuthenticated = () => {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user');
    const isAuthenticated = token && user ? true : false;

    return isAuthenticated
}

export const setToken = (token) => {
    sessionStorage.setItem('token', token)
}

export const deleteToken = () => {
    sessionStorage.removeItem('token')
}

export const RedirectToAuth = isAuthenticated() ? '' : <Redirect to="/login" />