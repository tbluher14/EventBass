import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllEventsThunk } from '../../store/event';
import EventCard from './EventCard';
import '../../index.css'


const AllEvents = () => {
    const dispatch = useDispatch();

    const events = useSelector(state => (state.events));
    console.log(events)

    useEffect(() => {
        dispatch(getAllEventsThunk())
    },[])

    return (
       <div>
       <h2 className='Events-near-you'>Events Near You </h2>
        <div className='all-events-container'>

            {Object.values(events).map(event => (
                <div key={event.id} className="all-events-card-container">
                    <EventCard event={event} />
                </div>
            ))}
        </div>
       </div>
    )
}


export default AllEvents
