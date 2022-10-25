import React, { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { createEventThunk } from '../../store/event';



const CreateEvent = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
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
    const timeRegX = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/
    const phoneRegX = /^\d{10}$/
    const zipRegX = /^\d{5}$/



    useEffect(()=> {
        const errors = [];

        if (!user) {
          errors.push("User must be logged in")
          setErrors(errors)
        }
        else {
        if (name.length < 1) errors.push('Please enter a name for your event');
        if (description.length < 1) errors.push('Please enter a description for your event');
        if (address.length < 1) errors.push('Please enter an address for your event');
        if (city.length < 1) errors.push('Please enter a city for your event');
        if (state.length < 1) errors.push('Please enter a state for your event');
        if (zip_code.length < 1) errors.push('Please enter a zip code for your event');
        if (image_url.length < 1 || !image_url.split('?')[0].match(imageRegX)) errors.push('Please enter a valid image url for your event (jpg, jpeg, png, svg)');
        if (website.length < 1 || /^https:\/\//.test(website) === false && /^http:\/\//.test(website) === false){
             errors.push('Please enter a website for your event (https or http)');
            }
        if (start_date.length < 1) errors.push('Please enter a start date for your event');
        if (start_time.length < 1) errors.push('Please enter a start time for your event');
        if (end_date.length < 1) errors.push('Please enter an end date for your event');
        if (end_time.length < 1) errors.push('Please enter an end time for your event');
        setErrors(errors);
    }
 }, [name, description, address, city, state, zip_code, image_url, website, start_date, start_time, end_date, end_time])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (errors.length === 0) {
            const event = {
                owner_id: user.id,
                name,
                description,
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
            console.log(event)
            return await dispatch(createEventThunk(event))
            .then((res)=> history.push(`/events/${res.id}`))

            }
        }

        return (
            <div className='form-outer-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-header'>Please Fill Out The Form Below To Create An Event</div>
                        <div className='form-container'>
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
                                        <button className='create-event-button' type='submit'>Create Event</button>
                                    </div>
                                        </div>
                                    </div>
                                </form>
                        </div>
)
}

export default CreateEvent
