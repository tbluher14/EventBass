import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";



const EventCard = ({ event }) => {
    const history = useHistory();
    const dispatch = useDispatch()

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
                            <div className="event-card-address">{event?.address}</div>
                            <div className="event-card-date">{event?.start_date}</div>
                            <div className="event-card-time">{event?.start_time}</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EventCard;
