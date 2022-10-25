
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
        <div className='my-events-container'>
            <h2>Events</h2>
           {userEvents?.map(event => (
             <div>
                <EventCard event={event} />
            </div>
           ))
        }
        </div>
    )
}

export default MyEvents
