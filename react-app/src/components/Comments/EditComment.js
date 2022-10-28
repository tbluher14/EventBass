import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { editCommentThunk } from "../../store/comment";
import { getAllCommentsThunk} from "../../store/comment";
import { getAllEventsThunk } from "../../store/event";


const EditComment = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { commentId } = useParams();

    // Grabbing state variables
    const sessionUser = useSelector(state => state.session.user);
    const specificComment = useSelector(state => state.comments[commentId])
    const specificEvent = useSelector(state => state.events[specificComment?.event_id])

    // Specific Slice of State logic
    const eventId = specificComment?.event_id
    const userId = sessionUser.id

    // Set State Variables
    const [submitted, setSubmitted] = useState(false)
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Use Effects
    useEffect((e) => {
        dispatch(getAllCommentsThunk())
        dispatch(getAllEventsThunk())
        .then(setIsLoaded(true))
      }, [dispatch])

    // Error Handling
    useEffect(()=> {
        const errors = []
        if (comment.length < 2 || comment.length  > 500) {
            errors.push('Please enter a comment between 2 and 500 characters.')
        }
        setErrors(errors)
    }, [comment])


    // Prepopulate data
    useEffect((e) => {
        if (specificComment){
            setIsLoaded(true)
            setComment(specificComment?.comment)
        }
    }, [specificComment])



    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
        if (errors.length === 0){
            const commentData = {
                    user_id: userId,
                    event_id: eventId,
                    comment: comment
                }
                if(comment.length>2 && comment.length < 500){
                    return dispatch(editCommentThunk(commentData, commentId))
                    .then(history.push(`/events/${specificComment?.event_id}`))
                }
        }

        }
        return  isLoaded && (
            <div className='create-comment-container'>
            <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="form-input-container">
                <h3 className="add_comment_header">
                    Edit Your Comment on {specificEvent?.name}
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
                    <button className="edit-comment-button" type="submit">Edit Comment</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default EditComment;
