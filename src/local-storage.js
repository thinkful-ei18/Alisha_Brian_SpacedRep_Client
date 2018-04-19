export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};

export const saveUserCredentials = user => {
    console.log('SCU:', user);
    console.log('strigified', JSON.stringify(user))
    try {
        localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {}
}