import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editEventThunk, getAllEventsThunk} from '../../store/event';
import {useHistory, useParams} from 'react-router-dom';


const EditEvent = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {eventId} = useParams()
    const events = useSelector(state => state.events)
    const currentEvent = events[eventId]

    const [name, setName] = useState(currentEvent?.name || "")
    const [description, setDescription] = useState(currentEvent?.description || "")
    const [address, setAddress] = useState(currentEvent?.address || "")
    const [city, setCity] = useState(currentEvent?.city || "")
    const [state, setState] = useState(currentEvent?.state || "")
    const [zip_code, setZipCode] = useState(currentEvent?.zip_code || "")
    const [image_url, setImage_url] = useState(currentEvent?.image_url || "")
    const [website, setWebsite] = useState(currentEvent?.website || "")
    const [start_date, setStart_date] = useState(currentEvent?.start_date || "")
    const [start_time, setStart_time] = useState(currentEvent?.start_time)
    const [end_date, setEnd_date] = useState(currentEvent?.end_date || "")
    const [end_time, setEnd_time] = useState(currentEvent?.end_time )
    const [refunds, setRefunds] = useState(currentEvent?.refunds || "")
    const [venue_name, setVenueName] = useState(currentEvent?.venue_name || "")

    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState([])

    console.log("START", typeof(start_time))


    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitted(true)
        const payload = {
            owner_id: currentEvent.owner_id,
            name,
            description,
            venue_name,
            address,
            city,
            state,
            zip_code,
            image_url,
            website,
            start_date,
            start_time: start_time,
            end_date,
            end_time: end_time,
            refund_policy: refunds
        }
        console.log(payload)
        return await dispatch(editEventThunk(payload, eventId))
        .then(dispatch(getAllEventsThunk()))
        .then(history.push(`/events/${eventId}`))
        }

    return (
        <div className='form-outer-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-header'>To Make Edits To Your Event, Please Fill Out The Following:</div>
                        <div className='form-container'>
                            <div className='form-input-container'>
                                <div className='create_errors'>
                                    {errors.map((error, ind) => (
                                        <div
                                        key={ind}
                                        className='error-message-container'
                                        >
                                        <div className='error-message'>{error}</div>
                                </div>
                                    ))}
                                </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event Name' className='form-label'>Event Name</label>
                                        <input className='form-field'
                                        name="Event Name"
                                        type="text"
                                        value={name}
                                        placeholder='Event Name'
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Venue Name' className='form-label'>Venue Name</label>
                                        <input className='form-field'
                                        name="Venue Name"
                                        type="text"
                                        value={venue_name}
                                        placeholder='Venue Name'
                                        onChange={(e) => setVenueName(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event Address' className='form-label'>Address</label>
                                        <input className='form-field'
                                        name="Event Address"
                                        type="text"
                                        value={address}
                                        placeholder='Event Address'
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event City' className='form-label'>City</label>
                                        <input className='form-field'
                                        name="Event City"
                                        type="text"
                                        value={city}
                                        placeholder='City'
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event State' className='form-label'>State</label>
                                        <input className='form-field'
                                        name="Event City"
                                        type="text"
                                        value={state}
                                        placeholder='State'
                                        onChange={(e) => setState(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event Zip' className='form-label'>Zip Code</label>
                                        <input className='form-field'
                                        name="Event Zip"
                                        type="text"
                                        value={zip_code}
                                        placeholder='Zip Code'
                                        onChange={(e) => setZipCode(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event Image URL' className='form-label'>Image URL</label>
                                        <input className='form-field'
                                        name="Event Image URL"
                                        type="text"
                                        value={image_url}
                                        placeholder='Event Image URL'
                                        onChange={(e) => setImage_url(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event Website' className='form-label'>Event Website</label>
                                        <input className='form-field'
                                        name="Event Website"
                                        type="text"
                                        value={website}
                                        placeholder='Event Website'
                                        onChange={(e) => setWebsite(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event Description' className='form-label'>Description</label>
                                        <input className='form-field'
                                        name="Event Description"
                                        type="text"
                                        value={description}
                                        placeholder='Event Description'
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event Start Date' className='form-label'>Start Date </label>
                                        <input className='form-field'
                                        name="Event Start Date"
                                        type="date"
                                        value={start_date}
                                        placeholder='Event Start Date'
                                        onChange={(e) => setStart_date(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event Start Time' className='form-label'>Start Time</label>
                                        <input className='form-field'
                                        name="Event Start Time"
                                        type="time"
                                        value={start_time}
                                        placeholder='Start Time'
                                        onChange={(e) => setStart_time(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event End Date' className='form-label'>End Date</label>
                                        <input className='form-field'
                                        name="Event End Date"
                                        type="date"
                                        value={end_date}
                                        placeholder='End Date'
                                        onChange={(e) => setEnd_date(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <label htmlFor='Event End Time' className='form-label'>End Time</label>
                                        <input className='form-field'
                                        name="Event End Time"
                                        type="time"
                                        value={end_time}
                                        placeholder='End Time'
                                        onChange={(e) => setEnd_time(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className='input-container'>

                                    <label htmlFor='Open Time & Close Time' className='form-field-labels'>Refunds Offered?</label>
                                    <select className="select-form-field-time" value={refunds} onChange={(e) => setRefunds(e.target.value)} placeholder="refunds" required>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    </div>
                                    <div className='create-event-button-container'>
                                        <button className='create-event-button' type='submit'>Edit Event</button>
                                    </div>
                                        </div>
                                    </div>
                                </form>
                        </div>
    )

}


export default EditEvent;
