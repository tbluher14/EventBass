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
    const formatTime = (time) => {
        let timeArr = time.split(":")
        let hour = timeArr[0]
        let minutes = timeArr[1]
        let amPm = "AM"
        if (hour > 12) {
            hour = hour - 12
            amPm = "PM"
        }
        return `${hour}:${minutes} ${amPm}`
    }
    const formatDate = (date) => {
        if (isLoaded){
            const datesArray = date.split('-')
            const monthArr = {"01": 'January', "02":'February', "03": 'March', "04": 'April', "05": 'May', "06":'June', "07":'July', "08": 'August', "09": 'September', "10": 'October', "11":'November', "12":'December'}
            const year = datesArray[0]
            const month = monthArr[datesArray[1]].slice(0,3)
            const day = datesArray[2]
            return (
                <>
                {month} {day}
                </>
            )
        }
    }

    useEffect(() => {

        (async () => {
        await dispatch(getAllEventsThunk())
        await dispatch(getAllCommentsThunk())
        await setIsLoaded(true)
        await dispatch(getAllUsersThunk())
        })()
    }, [])

    if (!isLoaded) {
        return null
    }

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
        isLoaded && <div className='event-detail-container'>
            <div className='event-detail-inner-container'>
                <div className='event-detail-image'>
                    <img
                    src={currentEvent?.image_url}
                    alt='event-detail-img'
                    className='event-detail-image'
                    />
                <div className='event-details-header-info-container'>
                <div className='event-details-header-date'>{formatDate(currentEvent?.start_date)}</div>
                <div className='event-details-header-name'>{currentEvent?.name}</div>
                <div className='event-details-header-description'>{currentEvent?.description}</div>
                <div>
                 <h3 className='event-details-event-owner'>
                    Hosted By: {eventOwner[0]?.username}
                 </h3>
                {sessionUser?.id === currentEvent?.owner_id && (
                    <button className='event-details-edit-button' onClick={editEvent(currentEvent?.id)}>Edit My Event</button>
                    )}
                {sessionUser?.id === currentEvent?.owner_id && (
                    <button className="event-details-delete-button" onClick={deleteEvent(currentEvent?.id)}>Delete My Event</button>
                    )}
                 </div>
                <h2 className="event-details-when-and-where-h2">When And Where:</h2>
                <div className='event-details-when-and-where-container'>
                    <div className='event-details-when-and-where-left'>
                        <div className='when-and-where-header-container'>
                    <i class="fa-regular fa-calendar"></i><h3 className='date-and-time-header'>Date And Time:</h3>
                        </div>
                        <div className='event-details-when-and-where-start-date'>{formatDate(currentEvent?.start_date)} - {formatTime(currentEvent?.start_time)} - </div>
                        <div className='event-details-when-and-where-end-time'>{formatDate(currentEvent?.end_date)} - {formatTime(currentEvent?.end_time)}</div>

                    </div>
                    <div className='event-details-when-and-where-right'>
                        <div className='location-header'>
                        <i className="fa-solid fa-map-pin"></i><h3 className='location-header-text'> Location: </h3>
                        </div>
                        <div className="event-details-location">{currentEvent?.venue_name}</div>
                        <div className='event-details-when-and-where-city'>{currentEvent?.city}, {currentEvent?.state}</div>
                        <div className='event-details-when-and-where-state'></div>
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
                    <button className='add-comment' onClick={() => history.push(`/${currentEvent.id}/create_comment`)}>Add Comment</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}


export default EventDetails;
