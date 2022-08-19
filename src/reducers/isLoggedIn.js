const isLoggedIn = (currentState = false, action) => {
     switch(action.type){
        case 'login':
            return !currentState;
            default:
                return currentState;
     }
}

export default isLoggedIn