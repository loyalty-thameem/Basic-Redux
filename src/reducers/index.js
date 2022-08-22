const initialState = {
    items: [],
    loading: false,
    error: null
}
 const fetchingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_POST_SUCCESS':
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case 'FETCH_POST_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
                items:[]
            }
        default:
            return state;
    }

}
export default fetchingReducer;