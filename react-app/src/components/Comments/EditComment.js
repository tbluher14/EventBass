import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { editCommentThunk } from "../../store/comment";
import { getAllCommentsThunk} from "../../store/comment";


const EditComment = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const { commentId } = useParams();
    const specificComment = useSelector(state => state.comments[commentId])
    const [comment, setComment] = useState('');
    const eventId = specificComment?.event_id
    const userId = sessionUser.id


    useEffect((e) => {
        dispatch(getAllCommentsThunk())
      }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        const commentData = {
                user_id: userId,
                event_id: eventId,
                comment: comment
            }

            return dispatch(editCommentThunk(commentData, commentId))
            .then(history.push(`/events/${specificComment?.event_id}`))

        }
        return  (
            <div className='create-comment-container'>
            <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="form-input-container">
                </div>
                <div className="input-container">
                    <label htmlFor="comment" className="form-label">Edit Comment</label>
                    <textarea
                    className="form-field"
                    name="comment" type="text"
                    placeholder="Comment"
                    value={comment}
                    required
                    onChange={(e) => setComment(e.target.value)} />
                </div>
                <div className="comment-button">
                    <button className="edit-comment-button" type="submit">Edit Comment</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default EditComment;
