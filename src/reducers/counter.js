export const countersFromReducer = (state = 0, action) => {
    console.log('We are reducer....')
    switch (action.type) {
        case 'INCREMENT':
            return state + 10;
        case 'DECREMENT':
            return state - 10;
        default:
            return state;
    }
} 