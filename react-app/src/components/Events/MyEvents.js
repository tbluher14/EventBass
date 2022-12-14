
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllEventsThunk } from '../../store/event';
import EventCard from './EventCard';
import '../../index.css'

const MyEvents = () => {

    const dispatch = useDispatch()
    const events = useSelector(state => state.events)
    const user = useSelector (state => state.session.user)
    const eventsArr = Object.values(events)
    const userEvents = eventsArr.filter((event) => event.owner_id == user.id)

    useEffect((e) => {

        dispatch(getAllEventsThunk())
        // dispatch(getAllUsersThu)
    }, [])

    return (
        <div>
        <h2 className='my-events-header'>My Events</h2>
        <div className='my-events-container'>
           {userEvents?.length == 0 ? <h2 className='my-events-header'>No Events Here!</h2> :
           userEvents?.length > 0} {userEvents?.map(event => (
             <div className='my_events_cards'>
                <EventCard event={event} />
            </div>
           ))
        }
        </div>
        </div>
    )
}

export default MyEvents
