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

    const imageRegX = /\.(jpeg|jpg|png|svg)$/
    const timeRegX = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/
    const phoneRegX = /^\d{10}$/
    const zipRegX = /^\d{5}$/

    useEffect (( ) => {
        const errors = []
        if (name.length < 2 || name.length>255) errors.push('Please enter a Name for your Event between 2 and 255 Characters');
        if (venue_name < 2 || venue_name > 255) errors.push('Please enter a Venue Name between 2 and 255 Characters');
        if (description.length < 1 || description.length>500) errors.push('Please enter a Description for your Event between 2 and 255 Characters');
        if (address.length < 2 || address.length > 255) errors.push('Please enter an Address for your Event between 2 and 255 Characters');
        if (city.length < 2 || city.length> 255) errors.push('Please enter a City for your Event between 2 and 255 Characters');
        if (state.length < 2 || state.length > 255) errors.push('Please enter a State for your Event between 2 and 255 Characters');
        if (zip_code.length !== 5) errors.push('Please enter a valid 5 digit Zip Code for your Event');
        if (image_url.length < 1 || !image_url.split('?')[0].match(imageRegX)) errors.push('Please enter a valid Image Url for your Event (jpg, jpeg, png, svg)');
        if (website.length < 1 || /^https:\/\//.test(website) === false && /^http:\/\//.test(website) === false){
             errors.push('Please enter a Website for your Event (https or http)');
            }
        if (start_date.length < 1) errors.push('Please enter a Start Date for your Event');
        if (start_time>end_time && start_date == end_date) errors.push('Please enter a Start Time before the Event End Time');
        if (start_date.length > 10) errors.push("Please Enter a Valid Start Date (MM-DD-YYYY)")
        if (end_date.length > 10) errors.push("Please Enter a Valid End Date (MM-DD-YYYY")
        if (start_date>end_date) errors.push('Please enter a Start Date before the Event End Date');
        if (start_time.length < 1) errors.push('Please enter a Start Time for your Event');
        if (end_date.length < 1) errors.push('Please enter an End Date for your Event');
        if (end_time.length < 1) errors.push('Please enter an End Time for your Event');
        if (start_date < new Date().toISOString().slice(0,10)) errors.push('Please enter a Start Date after today');
        setErrors(errors)
        }, [name, venue_name, description, address, city, state, zip_code, image_url, website, start_date, start_time, end_date, end_time])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitted(true)
        if (errors.length === 0){
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

            return await dispatch(editEventThunk(payload, eventId))
            .then(dispatch(getAllEventsThunk()))
            .then(history.push(`/events/${eventId}`))
            }
        }

    return (
        <div className='form-outer-container'>
                <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <h2>Edit Your Event: </h2>
                            <div className='form-input-container'>
                                <div className='create_errors'>
                                    {submitted && errors.map((error, ind) => (
                                        <div
                                        key={ind}
                                        className='error-message-container'
                                        >
                                        <div className='error-message'>{error}</div>
                                </div>
                                    ))}
                                </div>
                                    <div className='input-container'>
                                        <div className='info-header'>
                                        <h2>What is it? </h2>
                                        </div>
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
                                        <h2>Where is it?</h2>
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
                                        <h2> When Is It? </h2>
                                    <div className='input-container'>
                                        <label htmlFor='Event Start Date' className='form-label'>Start Date </label>
                                        <input className='form-field-date'
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
                                        <input className='form-field-date'
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
                                        <input className='form-field-date'
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
                                        <input className='form-field-date'
                                        name="Event End Time"
                                        type="time"
                                        value={end_time}
                                        placeholder='End Time'
                                        onChange={(e) => setEnd_time(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <h2> Additional Details: </h2>
                                    <div className='input-container'>
                                        <label htmlFor='Event Image URL' className='form-label'>Event Image URL</label>
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

                                    <label htmlFor='Open Time & Close Time' className='form-field-labels'>Refunds Offered?</label>
                                    <select className="select-form-field-time" value={refunds} onChange={(e) => setRefunds(e.target.value)} placeholder="refunds" required>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                    </div>
                                    <div className='create-event-button-container'>
                                        <button className='create-event-form-button' type='submit'>Create Event</button>
                                    </div>
                                        </div>
                                    </div>
                                </form>
                        </div>
    )

}


export default EditEvent;
