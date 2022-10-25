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
    console.log(eventId)
    const specificEvent = useSelector(state => state.events[eventId]);
    console.log(specificEvent)


    useEffect( ()   => {
        dispatch(getAllEventsThunk())
    }, [])

    return (
        <div>Comments</div>
    )
}


export default CreateComment
