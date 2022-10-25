import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

const CommentCard = ({ comment }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const { eventId } = useParams()

    const handleDelete = async (e) => {
        e.preventDefault()
        // await dispatch(deleteCommentThunk(comment.id))
        history.push(`/events/${eventId}`)
    }

    return (
        <div className='comment-card-container'>
            <div className='comment-card'>
                <div className='comment-card-header'>
                    <div className='comment-card-user'>
                        <div className='comment-card-user-name'>
                            {comment.User.username}
                        </div>
                        <div className='comment-card-user-image'>

                        </div>
                    </div>
                    <div className='comment-card-date'>
                        {comment.createdAt}
                    </div>
                </div>
                <div className='comment-card-body'>
                    {comment.body}
                </div>
                {sessionUser && sessionUser.id === comment.userId && (
                    <div className='comment-card-delete'>
                        {/* <button onClick={handleDelete}>Delete</button> */}
                    </div>
                )}
            </div>
        </div>
    )
}
