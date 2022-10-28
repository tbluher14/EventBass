
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllUsersThunk } from '../../store/users';
import { deleteCommentThunk } from '../../store/comment';
import { useHistory } from 'react-router-dom';

const CommentCard = ({ comment }) => {
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)
    const allUsers = useSelector(state => state.users)
    const commmentUser = allUsers[comment?.user_id]
    const history = useHistory()



    useEffect(() => {
        dispatch(getAllUsersThunk())
    }, [])

    return (
        <div className='comment-card-container'>
            <div className='comment-card'>
                <div className='comment-card-header'>
                    <div className='comment-card-user'>
                        <i class="fa-solid fa-user" id='comment-section-user-icon'></i> 
                        <div className='comment-card-user-name'>
                             {commmentUser?.username}
                        </div>
                        <div className='edit-delete-comment-container'>
                            {sessionUser && sessionUser?.id == comment?.user_id && (
                                <button className='comment-card-edit' onClick={() => history.push(`/comments/${comment?.id}/edit`)}>Edit</button>
                            )}

                        {   sessionUser && sessionUser?.id == comment?.user_id && (
                            <button onClick={()=> dispatch(deleteCommentThunk(comment?.id))} className='comment-card-delete'>Delete</button>
                            )}
                        </div>
                    </div>
                </div>
                <div className='comment-card-body'>
                    {comment?.comment}
                </div>
            </div>
        </div>
    )
}

export default CommentCard
