import React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createCommentThunk, getAllCommentsThunk } from '../../store/comment'
import {getAllEventsThunk} from "../../store/event";


const CreateComment = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const { eventId } = useParams();

    const specificEvent = useSelector(state => state.events[eventId]);


    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);


    useEffect( ()   => {
        dispatch(getAllEventsThunk())
        dispatch(getAllCommentsThunk())
    }, [])

    useEffect(()=> {
        const errors = []
        if (comment.length < 2 || comment.length  > 500) {
            errors.push('Please enter a comment between 2 and 500 characters.')
        }
        setErrors(errors)
    }, [comment])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)

        if (errors.length === 0){
            const commentData = {
                    user_id: sessionUser.id,
                    event_id: eventId,
                    comment: comment
                }

                if (comment.length>2 && comment.length < 500) {
                return dispatch(createCommentThunk(commentData))
                .then(history.push(`/events/${specificEvent.id}`))
                }
            }
        }


    return (
        <div className='create-comment-container'>
            <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="form-input-container">
                <h3 className="add_comment_header">
                    Add A Comment on {specificEvent?.name}
                </h3>
                </div>
                <div className="input-container">
                    <label htmlFor="comment" className="form-label"></label>
                    <div className="comment_errors">
                        {submitted && errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <textarea
                    className="form-field"
                    name="comment" type="text"
                    placeholder="Comment"
                    value={comment}
                    required
                    onChange={(e) => setComment(e.target.value)} />
                </div>
                <div className="comment-button">
                    <button className="create-comment-button" type="submit">Add Comment</button>
                </div>
            </div>
            </form>
        </div>
    )
}


export default CreateComment
