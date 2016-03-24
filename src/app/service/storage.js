const USER_KEY = 'USER_KEY';

export const setLoggedInUser = (userInfo) => {
    const userJson = JSON.stringify(userInfo);
    localStorage.setItem(USER_KEY, userJson);
}

export const getUserFromStorage = () => {
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) {
        return JSON.parse(userJson);
    }

    return null;
};

export const removeUserFromStorage = () => {
    localStorage.removeItem(USER_KEY);
};