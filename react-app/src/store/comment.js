
// Actions:
const GET_ALL_COMMENTS = 'comments/GET_ALL_COMMENTS';


// Action Creators:

export const getAllCommentsAC = (comments) => ({
    type: GET_ALL_COMMENTS,
    payload: comments
})


// Thunks:

export const getAllCommentsThunk = () => async (dispatch) => {
    const res = await fetch(`/api/comments/`);
    if (res.ok) {
        const data = await res.json();
        dispatch(getAllCommentsAC(data.comments));
        return data
    }
}


// Reducer:

const initialState = {}
const commentReducer = (state = initialState, action) => {
    let newState= {...state};
    switch (action.type) {
        case GET_ALL_COMMENTS:
            newState = {}
            action.payload.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        default:
            return state;
    }
}


export default commentReducer;
