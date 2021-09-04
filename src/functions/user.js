

export const getUser = () => {
    const user = sessionStorage.getItem('user')
    return user
}

export const setUser = (user) => {
    sessionStorage.setItem('user', user)
}

export const deleteUser = () => {
    sessionStorage.removeItem('user')
}