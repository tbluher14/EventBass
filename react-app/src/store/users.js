const GET_ALL_USERS = 'session/GET_ALL_USERS';


const getAllUsers = (users) => ({
    type: GET_ALL_USERS,
    payload: users
})


export const getAllUsersThunk = () => async (dispatch) => {
    const res = await fetch(`/api/users/`);
    if (res.ok) {
        const data = await res.json();
        // console.log("this is thunk data",data)
        dispatch(getAllUsers(data.users));
        return data
    }
}


const initialState = {}
export default function usersReducer(state = initialState, action) {
    let newState= {...state};
    switch (action.type) {
        case GET_ALL_USERS:
            action.payload.forEach(user => {
                newState[user.id] = user
            })
            return newState
        default:
            return state;
    }
}
