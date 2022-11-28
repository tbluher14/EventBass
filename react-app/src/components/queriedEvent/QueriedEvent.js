import { useEffect  } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { searchEventThunk } from '../../store/queriedEvent'
import EventCard from '../Events/EventCard';
// import './QueriedBusiness.css'


const QueriedEvent = () => {
  const dispatch = useDispatch();

  const queriedEvent = useSelector(state => (state.queryEvent))
  const queriedEventArr = Object.values(queriedEvent)
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("name");

  const url = useLocation().search


  useEffect(() => {
    dispatch(searchEventThunk(url.split("=")[1]))
  }, [dispatch, url])

  let queriedResults;

  if (queriedEventArr.length === 0) {
    queriedResults = (
    <div className='all-events-container'>
      <div className='queriedevents-results'>
        0 Events found for name: "{query}"
      </div>
    </div>
    )
  } else if (queriedEventArr.length === 1) {
    queriedResults = (
      <div className='all-events-container'>
        <div className='queriedevents-results'>
          {queriedEventArr.length} Events found for "{query}"
        </div>
          {queriedEventArr.map((event) => (
            <div className='all-events-card-container' key={event}>
              <EventCard event={event} key={event}/>
            </div>
          ))}
      </div>
    )
  } else if (queriedEventArr.length > 1) {
    queriedResults = (
    <div className='all-events-container'>
      <div className='queriedevents-results'>
        {queriedEventArr.length} Events found for "{query}"
      </div>
        {queriedEventArr.map((event) => (
          <div className='all-events-card-container'>
            <EventCard event={event}/>
          </div>
        ))}
    </div>
    )
  }

  return (
    <div>
      {queriedResults}
    </div>
  )
}

export default QueriedEvent;
