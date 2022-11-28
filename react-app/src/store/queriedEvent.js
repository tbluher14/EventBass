const SEARCH_EVENT = 'events/SEARCH_EVENT';


export const searchEventAC = (events) => ({
  type: SEARCH_EVENT,
  payload: events,
})

// search thunk
export const searchBusinessThunk = (name) => async (dispatch) => {
  const res = await fetch(`/api/events/search?name=${name}`)
  if (res.ok) {
      const events = await res.json()
      dispatch(searchEventAC(events))
      return res
  }
}

const intialState = {};
const queryEventReducer = (state = intialState, action) => {
  let newState = {...state}
  switch (action.type){
    case SEARCH_EVENT:
      newState = {}
      action.payload.events.forEach(event => {
        newState[event.id] = event
      })
      return newState;
    default:
      return state
  }
}

export default queryEventReducer;
