import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { deleteEventThunk, editEventAV, getAllEventsThunk } from '../../store/event';
import './EventDetails.css'
import { getAllCommentsThunk } from '../../store/comment';
import CommentCard from '../Comments/CommentCard'
import { getAllUsersThunk } from '../../store/users';
import { formatTime } from '../dateTimeRendering/timeRendering';



const EventDetails = () => {

    const dispatch= useDispatch()
    const history = useHistory()
    const { eventId } = useParams()
    const [isLoaded, setIsLoaded] = useState(false)

    const currentEvent = useSelector(state => state.events[eventId])

    // Event Owner Logic:
    const sessionUser = useSelector(state => state.session.user)
    const allUsers = useSelector(state => state.users)
    const userArr = Object.values(allUsers)
    const eventOwner = userArr.filter(user => user.id == currentEvent?.owner_id)



    //Comments Section:
    const eventComments = useSelector(state => state.comments)
    const commentsArr = Object.values(eventComments)
    const specificComments = commentsArr.filter(comment => comment?.event_id == eventId)

    // Date Rendering:
    const sDate = new Date(currentEvent?.start_date)
    const eventArr = sDate.toString().split(' ')
    const startDate = eventArr[0] + ", " + eventArr[1] + " " + eventArr[2] + ", " + eventArr[3]
    const startTime = formatTime(currentEvent?.start_time)
    const endTime = formatTime(currentEvent?.end_time)
    const eDate = new Date(currentEvent?.end_date)
    const eventArr2 = eDate.toString().split(' ')
    const endDate = eventArr2[0] + ", " + eventArr2[1] + " " + eventArr2[2] + ", " + eventArr2[3]


    useEffect(() => {
        dispatch(getAllEventsThunk())
        dispatch(getAllCommentsThunk())
        dispatch(getAllUsersThunk())
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
                 <div className='event-details-event-owner'>
                    Hosted By: {eventOwner[0]?.username}
                 </div>
                <h2 className="event-details-when-and-where-h2">When And Where:</h2>
                <div className='event-details-when-and-where-container'>
                    <div className='event-details-when-and-where-left'>
                        <div className='when-and-where-header-container'>
                    <i class="fa-regular fa-calendar"></i><h3 className='date-and-time-header'>Date And Time:</h3>
                        </div>
                        <div className='event-details-when-and-where-start-date'>{startDate} {startTime} - </div>
                        <div className='event-details-when-and-where-end-time'>{endDate} {endTime} </div>

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
