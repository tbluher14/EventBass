import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createLikeThunk, getAllLikesThunk } from '../../store/like'
import { deleteLikeThunk } from '../../store/like'
import { getAllEventsThunk } from '../../store/event'
// import './LikeButton.css'

const LikeButton = ({ event_id }) => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  const likes = useSelector(state => state.likes)

  const likesArr = Object.values(likes)

  useEffect(() => {
    dispatch(getAllEventsThunk())
    dispatch(getAllLikesThunk())
  }, [dispatch])

  const handleCreateLike = e => {
    e.preventDefault()

    const data = {
      user_id: user?.id,
      event_id: event_id
    }

    return dispatch(createLikeThunk(data)).then(dispatch(getAllLikesThunk()))
  }

  const handleDeleteLike = e => {
    e.preventDefault()

    for (let i = 0; i < likesArr.length; i++) {
      if (
        likesArr[i]?.user_id === user?.id &&
        likesArr[i]?.event_id === Number(event_id)
      ) {
        return dispatch(deleteLikeThunk(likesArr[i]?.id)).then(
          dispatch(getAllLikesThunk())
        )
      }
    }
  }

  const userLiked = likesArr.filter(
    like => like?.user_id === user?.id && like?.event_id === Number(event_id)
  )

  let conditional

  if (userLiked.length > 0) {
    conditional = (
        <div onClick={handleDeleteLike}>
          <i className='fa-solid fa-heart fa-2xl delete-like-button' id="delete-like-button"></i>
      </div>
    )
  }
  else if (!user) {
    return null
  }
  else {
    conditional = (
      <div onClick={handleCreateLike}>
        <i className='fa-regular fa-heart fa-2xl create-like-button' id="create-like-button"></i>
      </div>
    )
  }

  return <div>{conditional}</div>
}

export default LikeButton
