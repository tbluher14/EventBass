import React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createCommentThunk } from '../../store/comment'
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

    // useEffect(() => {
    //     const errors = []
    //     if (comment.length < 2 || comment.length  > 500) {
    //         errors.push('Please enter a comment between 2 and 500 characters.')
    //     }
    //     setErrors(errors)

    // }, [comment])

    useEffect( ()   => {
        dispatch(getAllEventsThunk())
    }, [])


    const handleSubmit = async (e) => {
        e.prenventDefault();
        // setSubmitted(true)
        const commentData = {
                user_id: Number(sessionUser.id),
                event_id: Number(specificEvent.id),
                comment: comment
            }

            console.log(commentData)
            // if (comment.length>2 && comment.length < 500) {
            return dispatch(createCommentThunk(commentData))
            // history.push(`/events/${specificEvent.id}`)
            // }
        }


    return (
        <div className='create-comment-container'>
            <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="form-input-container">
                    <div className="comment_errors">
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>

                </div>
                <div className="input-container">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea
                    className="form-field"
                    name="comment" type="text"
                    placeholder="Comment"
                    value={comment}
                    required
                    onChange={(e) => setComment(e.target.value)} />
                </div>
                <div className="comment-button">
                    <button className="create-comment-button" type="submit">Create Comment</button>
                </div>
            </div>
            </form>
        </div>
    )
}


export default CreateComment
