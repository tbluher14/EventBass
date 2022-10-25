
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllUsersThunk } from '../../store/users';
import { deleteCommentThunk } from '../../store/comment';

const CommentCard = ({ comment }) => {
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)
    const allUsers = useSelector(state => state.users)
    const commmentUser = allUsers[comment?.user_id]



    useEffect(() => {
        dispatch(getAllUsersThunk())
    }, [])

    return (
        <div className='comment-card-container'>
            <div className='comment-card'>
                <div className='comment-card-header'>
                    <div className='comment-card-user'>
                        <div className='comment-card-user-name'>
                        <i class="fa-solid fa-user" id='comment-section-user-icon'></i>
                             {commmentUser?.first_name} {commmentUser?.last_name}
                        </div>
                    </div>
                </div>
                <div className='comment-card-body'>
                    {comment?.comment}
                </div>
                {sessionUser && sessionUser.id == comment?.user_id && (
                    <div className='comment-card-delete'>
                        <button onClick={()=> dispatch(deleteCommentThunk(comment.id))}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CommentCard