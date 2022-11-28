import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllLikesThunk } from '../../store/like'
import { getAllEventsThunk } from '../../store/event'
import { getAllUsersThunk } from '../../store/users'
import { useHistory, useParams } from 'react-router-dom'
import { getAllCommentsThunk } from '../../store/comment'
import EventCard from '../Events/EventCard'
import '../../index.css'

const UserLikes = () => {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const events = useSelector(state => state.events)
  const likes = useSelector(state => state.likes)

  const likesArr = Object.values(likes)
  const userLikes = likesArr.filter(like => like?.user_id === sessionUser?.id)
  let likesEventsIdArr = []

  for (let i = 0; i < userLikes.length; i++) {
    likesEventsIdArr.push(userLikes[i].event_id)
  }

  const eventArr = Object.values(events)

  const userLikedEvents = []

  for (let i = 0; i < eventArr.length; i++) {
    if (likesEventsIdArr.includes(eventArr[i].id)) {
      userLikedEvents.push(eventArr[i])
    }
  }

  useEffect(() => {
    dispatch(getAllEventsThunk())
    dispatch(getAllLikesThunk())
    dispatch(getAllUsersThunk())
    dispatch(getAllCommentsThunk())
  }, [dispatch])

  let renderEvents

  if (userLikedEvents.length > 0) {
    renderEvents = (
      <div className='mylikes-outer-container'>
        <div className='userlikes-container'>
          <div className='userlikes-inner-container'>
            <h2 className='liked-events-header'>Your Liked Events</h2>
            <div className='userlikes-events-container'>
              {userLikedEvents.map(event => {
                return (
                  <>
                    <EventCard event={event} />
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  } else if (userLikedEvents.length === 0 && sessionUser) {
    renderEvents = (
      <div className='mylikes-outer-container'>
        <div className='mylikes-none-container'>
          <div className='mylikes-text-container'>
            <div className='mylikes-text-top'>You have no liked events.</div>
            <div className='mylikes-text-inner-container'>
              <div className='mylikes-text-middle'>{`You currently have no liked events. Explore Events uploaded by users on the Browse Events page.`}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{renderEvents}</>
}

export default UserLikes
