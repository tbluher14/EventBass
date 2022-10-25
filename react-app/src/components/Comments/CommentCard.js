import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllUsersThunk } from '../../store/users';

const CommentCard = ({ comment }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const allUsers = useSelector(state => state.users)
    const commmentUser = allUsers[comment?.user_id]

    const { eventId } = useParams()

    const handleDelete = async (e) => {
        e.preventDefault()
        // await dispatch(deleteCommentThunk(comment.id))
        history.push(`/events/${eventId}`)
    }

    useEffect(() => {
        dispatch(getAllUsersThunk())
    }, [])

    return (
        <div className='comment-card-container'>
            <div className='comment-card'>
                <div className='comment-card-header'>
                    <div className='comment-card-user'>
                        <div className='comment-card-user-name'>
                            {commmentUser?.first_name} {commmentUser?.last_name}
                        </div>
                    </div>
                </div>
                <div className='comment-card-body'>
                    {comment?.comment}
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

export default CommentCard
