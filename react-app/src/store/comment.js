
// Actions:
const GET_ALL_COMMENTS = 'comments/GET_ALL_COMMENTS';
const CREATE_COMMENT = 'comments/CREATE_COMMENT';
const DELETE_COMMENT  = 'comments/DELETE_COMMENT';
const EDIT_COMMENT = 'comments/EDIT_COMMENT';


// Action Creators:

export const getAllCommentsAC = (comments) => ({
    type: GET_ALL_COMMENTS,
    payload: comments
})

export const createCommentAC = (comment) => ({
    type: CREATE_COMMENT,
    payload: comment
})

export const deleteCommentAC = (commentId) => ({
    type: DELETE_COMMENT,
    payload: commentId
})

export const editCommentAC = (comment) => ({
    type: EDIT_COMMENT,
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
    console.log("thunk is running")
    const res = await fetch(`/api/comments/create_comment`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comment)
    })
    console.log(res)
    if (res.ok){
        const data = await res.json();
        dispatch(createCommentAC(data));
        return res
    }
}

export const editCommentThunk = (comment, commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comment)
    })
    if (res.ok){
        const data = await res.json();
        dispatch(editCommentAC(data));
        return res
    }
}

export const deleteCommentThunk = (comment_id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${comment_id}`, {
        method: 'DELETE',
    })
    if (res.ok){
        dispatch(deleteCommentAC(comment_id));
        return res
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
        case EDIT_COMMENT:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        case DELETE_COMMENT:
            newState = {...state}
            delete newState[action.payload]
            return newState
        default:
            return state;
    }
}



export default commentReducer;
