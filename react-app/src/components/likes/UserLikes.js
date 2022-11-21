import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllLikesThunk } from '../../store/like';
import { getAllEventsThunk } from '../../store/event';
import { getAllUsersThunk } from '../../store/users';
import { useHistory, useParams } from 'react-router-dom';
import { getAllCommentsThunk } from "../../store/comment";
import EventCard from '../Events/EventCard';
// import './UserLikes.css'

const UserLikes = () => {

  const dispatch = useDispatch();
  const history = useHistory();


  const sessionUser = useSelector((state) => state.session.user)
  const events = useSelector((state) => state.events)
  const comments = useSelector(state => state.comments)
  const likes = useSelector((state) => state.likes)
  const users = useSelector((state) => state.users)

  const likesArr = Object.values(likes)
console.log("likes arr", likesArr)
console.log('session user', sessionUser)
    const userLikes = likesArr.filter(like => like?.user_id === sessionUser?.id)
console.log("user likes", userLikes)


  let likesEventsIdArr = [];

  for (let i = 0; i < userLikes.length; i++) {
    likesEventsIdArr.push(userLikes[i].event_id)
  }

  const eventArr = Object.values(events)

  const userLikedEvents = [];

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

  let renderEvents;

  if (userLikedEvents.length > 0) {
    renderEvents = (
      <div className='youPage-outer-container'>
        <div className="userlikes-container">
          <div className="userlikes-inner-container">
            <div className="userlikes-images-container">
              {userLikedEvents.map((event) => {
                return (
                  <>
                    <EventCard event={event} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
}
//   } else if ((userLikedEvents.length) === 0 && (currentUser?.id === ?.id)) {
//     renderEvents = (
//       <div className='youPage-outer-container'>
//         <div className='youPage-none-container'>
//           <div className='youPage-text-container'>
//             <div className='youPage-text-top'>You have no liked events.</div>
//             <div className='youPage-text-inner-container'>
//               <div className='youPage-text-middle'>{`You currently have no liked photos. Explore other photos uploaded by users in the explore page.`}</div>

//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   } else if ((userLikedEvents.length) === 0 && (currentUser?.id !== user?.id)) {
//     renderEvents = (
//       <div className='youPage-outer-container'>
//         <div className='youPage-none-container'>
//           <div className='youPage-text-container'>
//             <div className='youPage-text-top'>{`${currentUser?.first_name} ${currentUser?.last_name} does not have any liked photos.`}</div>
//             <div className='youPage-text-inner-container'>
//               <div className='youPage-text-middle'>{`${currentUser?.first_name} ${currentUser?.last_name} currently has no liked photos. Explore other photos uploaded by users in the explore page.`}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

  return (
    <>
      {renderEvents}
    </>
  )

}

export default UserLikes;
