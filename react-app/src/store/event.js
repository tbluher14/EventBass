// Actions:

const GET_ALL_EVENTS = 'event/GET_ALL_EVENTS';
const CREATE_EVENT = 'event/CREATE_EVENT';
const EDIT_EVENT = 'event/EDIT_EVENT';
const DELETE_EVENT = 'event/DELETE_EVENT';


// Action Creators:
export const getAllEventsAC = (events) => ({
    type: GET_ALL_EVENTS,
    payload: events
});


export const createEventAC = (event) => ({
    type: CREATE_EVENT,
    payload: event
});

export const editEventAV = (event) => ({
    type: EDIT_EVENT,
    payload: event
})

export const deleteEventAC = (eventId) => ({
    type: DELETE_EVENT,
    payload: eventId
})


// Thunks:
// get all events thunk
export const getAllEventsThunk = () => async (dispatch) => {
    const res = await fetch('/api/events/');
    if (res.ok) {
    const data = await res.json();
    dispatch(getAllEventsAC(data.events));
    return data
    }
}

// create event thunk
export const createEventThunk = (event) => async (dispatch) => {
    const res = await fetch('/api/events/create_event', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(event)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(createEventAC(data.event));
        return data
    }
}

//edit event thunk
export const editEventThunk = (event, eventId) => async (dispatch) => {
    const res = await fetch(`/api/events/${eventId}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(event)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(editEventAV(data));
        return data
    }
}

// delete event thunk
export const deleteEventThunk = (eventId) => async (dispatch) => {
    const res = await fetch(`/api/events/${eventId}`, {
        method: 'DELETE',
    })
    if (res.ok){
        dispatch(deleteEventAC(eventId));
    }
}

// Events Reducer:
const initialState = {}
const eventReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_EVENTS:
            newState = {}
            action.payload.forEach(event => {
                newState[event.id] = event
                })
            return newState;
        case CREATE_EVENT:
            newState = {...state}
            return newState;
        case DELETE_EVENT:
            newState = {...state}
            delete newState[action.payload]
            return newState;
        case EDIT_EVENT:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState;
        default:
            return state;
    }
}


export default eventReducer;
