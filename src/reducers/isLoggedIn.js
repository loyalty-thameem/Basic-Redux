export const isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return !state;
        default:
            return state;
    }
}