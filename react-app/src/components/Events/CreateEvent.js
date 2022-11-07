import React, { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { createEventThunk } from '../../store/event';
import '../../index.css'


const CreateEvent = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);

    // State
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [venue_name, setVenueName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip_code, setZipCode] = useState('');
    const [image_url, setImage_url] = useState('');
    const [website, setWebsite]= useState('');
    const [start_date, setStart_date] = useState('');
    const [start_time, setStart_time] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [end_time, setEnd_time] = useState('');
    const [refunds, setRefunds] = useState("false")

    const [errors, setErrors] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)


    const imageRegX = /\.(jpeg|jpg|png|svg)$/
    // Time Functions

    const eventInFuture = (sTime, eTime) => {
        sTime = new Date(sTime)
        eTime = new Date(eTime)
        return sTime.getTime() >= eTime.getTime()
    }

    const currentDate = () => {
        const currentDate = new Date()
        const day = currentDate.getDate().toString().padStart(2, '0')
        const month = (currentDate.getMonth()+ 1).toString().padStart(2, '0')
        const year = currentDate.getFullYear()
        return year + '-'+ month + '-' + day
    }


    useEffect(()=> {
        const errors = [];
        const currentTime = new Date().toString().slice(16,21)
        const zipRegX = /^\d{5}$/

        if (!user) {
          errors.push("User must be logged in")
          setErrors(errors)
        }
        else {
        if (eventInFuture(start_date, currentDate()) == false){
            errors.push("Event must happen in the future")
        }
        if (start_date.length < 1) errors.push('Start Date for your event is required');
        if (start_time > end_time && start_date === end_date) errors.push('Start Time must be before event End Time on the same day');
        if (start_date.length > 10) errors.push("Please enter a valid Start Date (MM-DD-YYYY)")
        if (end_date.length > 10) errors.push("Please enter a valid End Date (MM-DD-YYYY)")
        if (start_date>end_date) errors.push("Start Date must be before the event's End Date");
        if (start_time.length < 1) errors.push('Start Time for your event is required');
        if (end_date.length < 1) errors.push('End Date for your event is required');
        if (end_time.length < 1) errors.push('End Time for your event is required');

        if ((start_time<currentTime) && (start_date == currentDate())) errors.push('Please enter a Start Time in the future.')
        if (name.length < 2 || name.length>255) errors.push('Event Name must be between 2 and 255 characters');
        if (venue_name.length < 2 || venue_name.length > 50) errors.push('Venue Name must be between 2 and 50 Characters');
        if (description.length < 1 || description.length>500) errors.push('Description for your event must be between 2 and 500 Characters');
        if (address.length < 2 || address.length > 50) errors.push('Address for your event must be between 2 and 50 Characters');
        if (city.length < 2 || city.length> 50) errors.push('City for your Event must be between 2 and 50 Characters');
        if (state.length < 2 || state.length > 50) errors.push('State for your event must be between 2 and 50 Characters');
        if (zip_code.length !== 5 || (!zip_code.match(zipRegX))) errors.push('Zip Code must be 5 digits');
        if (image_url.length < 1 || !image_url.split('?')[0].match(imageRegX)) errors.push('Image Url for your event must be of type: jpg, jpeg, png, svg');
        if (website.length < 1 || /^https:\/\//.test(website) === false && /^http:\/\//.test(website) === false){
             errors.push('Please enter a Website for your event (https or http)');
            }
        ;
        setErrors(errors);
    }
 }, [name, venue_name, description, address, city, state, zip_code, image_url, website, start_date, start_time, end_date, end_time])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        window.scrollTo(0,0)

        if (errors.length === 0) {
            const event = {
                owner_id: user.id,
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
                start_time,
                end_date,
                end_time,
                refund_policy: refunds,
            }

            return await dispatch(createEventThunk(event))
            .then((res)=> history.push(`/events/${res.id}`))

            }
        }

        return (
            <div className='form-outer-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-header'></div>
                    <h2 className='create_event_header'>Please Fill Out All Fields Below To Create An Event:</h2>
                        <div className='form-container'>
                                {/* <div className='create_errors'> */}
                                    {submitted && errors.map((error, ind) => (
                                        // <div
                                        // key={ind}
                                        // className='error-message-container'
                                        // >
                                        <div className='create_event_error-message'>{error}</div>
                                // </div>
                                    ))}
                                {/* </div> */}
                            <div className='form-input-container'>
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

export default CreateEvent
