export let currentUsername = '';

export const setCurrentUsername = (username) => {
    currentUsername = username;
    localStorage.setItem("currentUsername", username);
}