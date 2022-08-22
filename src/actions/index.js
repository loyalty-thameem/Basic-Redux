import axios from "axios";

export const fetchingAction = () => async (dispatch, getState) => {
    dispatch({
        type: 'FETCH_POST_REQUEST',
    })
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: 'FETCH_POST_SUCCESS',
            payload: response.data,
        });
    }
    catch (error) {
        dispatch({
            type: 'FETCH_POST_FAILURE',
            error
        });
    }
}
