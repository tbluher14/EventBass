import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import '../../index.css';


const EventCard = ({ event }) => {
    const history = useHistory();
    const dispatch = useDispatch()

    const dateLogic = new Date(event.start_date)
    const dateArr = dateLogic.toString().split(' ')
    const date = dateArr[0] + ", " + dateArr[1] + " " + dateArr[2] + ", " + dateArr[3]
    console.log(date)
    return (
        <div className="event-card">
            <div onClick={() => history.push(`/events/${event?.id}`)}>
                <div className="event-card-container">
                    <div className="event-card-inner-container">
                        <div className="event-card-inner-container-left">
                            <img src={event?.image_url} alt="event-card" className="event-card-image" />
                        </div>
                        <div className="event-card-inner-container-right">
                            <div className="event-card-header">{event?.name}</div>
                            <div className="event-card-date">{date}</div>
                            <div className="event-card-address">{event?.venue_name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EventCard;
