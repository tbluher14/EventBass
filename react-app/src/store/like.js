// Actions
const GET_ALL_LIKES = 'likes/GET_ALL_LIKES'
const CREATE_LIKE = 'likes/CREATE_LIKE'
const DELETE_LIKE = 'likes/DELETE_LIKE'

// Action Creators
export const getAllLikesAC = (likes) => ({
  type: GET_ALL_LIKES,
  payload: likes,
})

export const createLikeAC = (like) => ({
  type: CREATE_LIKE,
  payload: like,
})

export const deleteLikeAC = (likeId) => ({
  type: DELETE_LIKE,
  payload: likeId,
})

// Thunks
export const getAllLikesThunk = () => async (dispatch) => {
  const res = await fetch('/api/likes/');
  if (res.ok) {
    const likes = await res.json()
    dispatch(getAllLikesAC(likes.likes))
    return likes
  }
}

export const createLikeThunk = (like) => async (dispatch) => {
  const res = await fetch(`/api/likes/create_like`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(like)
  })
  if (res.ok) {
    const like = await res.json()
    dispatch(createLikeAC(like))
    return like
  }
}

export const deleteLikeThunk = (likeId) => async (dispatch) => {
  const res = await fetch(`/api/likes/${likeId}`, {
    method: 'DELETE',
  })
  if (res.ok) {
    dispatch(deleteLikeAC(likeId))
    return likeId
  }
}

// Reducer
const initialState = {}
const likesReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
      case GET_ALL_LIKES:
        action.payload.forEach((like) => {
            newState[like.id] = like
        })
        return newState
      case CREATE_LIKE:
        newState[action.payload.id] = action.payload
        return newState
      case DELETE_LIKE:
        delete newState[action.payload]
        return newState
      default:
        return state
    }
}

export default likesReducer;
