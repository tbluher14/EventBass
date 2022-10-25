import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { deleteEventThunk, editEventAV, getAllEventsThunk } from '../../store/event';
import './EventDetails.css'
import { getAllCommentsThunk } from '../../store/comment';
import CommentCard from '../Comments/CommentCard'



const EventDetails = () => {

    const dispatch= useDispatch()
    const history = useHistory()
    const { eventId } = useParams()
    const [isLoaded, setIsLoaded] = useState(false)

    const currentEvent = useSelector(state => state.events[eventId])
    const sessionUser = useSelector(state => state.session.user)


    //Comments Section:
    const eventComments = useSelector(state => state.comments)
    const commentsArr = Object.values(eventComments)
    const specificComments = commentsArr.filter(comment => comment?.event_id == eventId)

    // Date Rendering:
    const eventDate = new Date(currentEvent?.start_date)
    const eventArr = eventDate.toString().split(' ')



    useEffect(() => {
        dispatch(getAllEventsThunk())
        dispatch(getAllCommentsThunk())
    }, [])

    const refundLogic = () => {
        if (currentEvent?.refunds === "true") {
            return 'Refunds Availabe'
        } else {
            return 'No Refunds'
        }
    }

    const deleteEvent = (eventId) => async (e) => {
        e.preventDefault()
        history.push('/all-events')
        const res = await dispatch(deleteEventThunk(eventId))
        return res
    }

    const editEvent = (eventId) => async (e) => {
        e.preventDefault()
        history.push(`/events/${eventId}/edit`)
    }

    return (
        <div className='event-detail-container'>
            <div className='event-detail-inner-container'>
                <div className='event-detail-image'>
                    <img
                    src={currentEvent?.image_url}
                    alt='event-detail-img'
                    className='event-detail-image'
                    />
                <div className='event-details-header-info-container'>
                <div className='event-details-header-date'>{eventArr[1]} {eventArr[2]}</div>
                <div className='event-details-header-name'>{currentEvent?.name}</div>
                <div className='event-details-header-description'>{currentEvent?.description}</div>
                <div>
                {sessionUser?.id === currentEvent?.owner_id && (
                    <button className='event-details-edit-button' onClick={editEvent(currentEvent?.id)}>Edit My Event</button>
                    )}
                {sessionUser?.id === currentEvent?.owner_id && (
                    <button className="event-deatils-delete-button" onClick={deleteEvent(currentEvent?.id)}>Delete My Event</button>
                    )}
                 </div>
                <h2 className="event-details-when-and-where-h2">When And Where:</h2>
                <div className='event-details-when-and-where-container'>
                    <div className='event-details-when-and-where-left'>
                        <h3>Date And Time:</h3>
                        <div className='event-details-when-and-where-start-date'>{currentEvent?.start_date}</div>
                        <div className='event-details-when-and-where-start-time'>{currentEvent?.start_time}</div>
                        <div className='event-details-when-and-where-end-time'>{currentEvent?.end_time}</div>
                        <div className='event-details-when-and-where-end-date'>{currentEvent?.end_date}</div>
                    </div>
                    <div className='event-details-when-and-where-right'>
                        <h3> Location: </h3>
                        <div className='event-details-when-and-where-address'>{currentEvent?.address}</div>
                        <div className='event-details-when-and-where-city'>{currentEvent?.city}</div>
                        <div className='event-details-when-and-where-state'>{currentEvent?.state}</div>
                    </div>
                </div>
                <div className='event-details-refund-container'>
                    <h2 className="event-details-Refund-Policy-h2">Refund Policy:</h2>
                    <div className='event-details-refund-policy'>{refundLogic()}</div>
                </div>
                <div className='event-details-about-container'>
                    <h2 className="event-details-About-This-Event-h2">About This Event:</h2>
                    <div className='event-details-about-this-event-descripton'>{currentEvent?.description}</div>
                </div>
                <div className='event-details-comments-container'>
                    <h2 className="event-details-Comments-h2">Comments:</h2>
                    {specificComments?.map((comment) => (
                        <div className='event-details-comments'>
                            <CommentCard key={comment.id} comment = {comment}></CommentCard>
                        </div>
                     ))}
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}


export default EventDetails;
