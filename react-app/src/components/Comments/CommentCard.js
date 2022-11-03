
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getAllUsersThunk } from '../../store/users';
import { deleteCommentThunk, editCommentThunk, getAllCommentsThunk } from '../../store/comment';
import { useHistory, useParams } from 'react-router-dom';

const CommentCard = ({ comment }) => {
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)
    const allUsers = useSelector(state => state.users)
    const commmentUser = allUsers[comment?.user_id]
    const history = useHistory()

    const {eventId} = useParams()

    const [body, setBody]= useState(comment?.comment)
    const [editing, setEditing] = useState(false)
    const [errors, setErrors] = useState([])
    const [submitted, setSubmitted] = useState(false)


    useEffect((e) => {
        let errors = []
        if (body.length < 2 || body.length > 255){
            errors.push("Please leave a comment between 2 and 255 characters")
        }
        setErrors(errors)
    }, [body])

    useEffect(() => {
        dispatch(getAllUsersThunk())
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()

        setSubmitted(true)

        const commentData = {
            user_id: sessionUser.id,
            event_id: eventId,
            comment: body,
        }

        if (body.length > 1 && body.length < 256){
            const awaitedComment = await dispatch(editCommentThunk(commentData, comment?.id))
            dispatch(getAllCommentsThunk())
            setEditing(false)
        }
    }

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
                                <button className='comment-card-edit' onClick={() => setEditing(true)}>Edit</button>
                            )}

                        {   sessionUser && sessionUser?.id == comment?.user_id && (
                            <button onClick={()=> dispatch(deleteCommentThunk(comment?.id))} className='comment-card-delete'>Delete</button>
                            )}
                        </div>
                    </div>
                </div>
                {editing ?
                <form onSubmit={handleSubmit}>
                    <textarea
                    className='form-field'
                    resize="none"
                    type='text'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    />
                <div>
                    {submitted && errors.map(errors => (
                        <div className='comment_errors'>{errors}</div>
                    ))}
                </div>
                <button className='edit-comment-button' type="submit">Edit Comment</button>
                </form>
             :
                <div className='comment-card-body'>
                    {comment?.comment}
                </div>
            }
            </div>
        </div>
    )
}

export default CommentCard
