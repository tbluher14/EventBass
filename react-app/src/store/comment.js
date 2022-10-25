
// Actions:
const GET_ALL_COMMENTS = 'comments/GET_ALL_COMMENTS';
const CREATE_COMMENT = 'comments/CREATE_COMMENT';


// Action Creators:

export const getAllCommentsAC = (comments) => ({
    type: GET_ALL_COMMENTS,
    payload: comments
})

export const createCommentAC = (comment) => ({
    type: CREATE_COMMENT,
    payload: comment
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

export const createCommentThunk = (comment) => async (dispatch) => {
    const res = await fetch(`/api/comments/`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comment)
    })
    if (res.ok){
        const data = await res.json();
        dispatch(createCommentAC(data.comment));
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
        case CREATE_COMMENT:
            newState = {...state}
            return newState
        default:
            return state;
    }
}


export default commentReducer;
