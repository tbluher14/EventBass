import './404Page.css'
import { useHistory, useParams } from "react-router-dom";
import fof from './404.jpeg'

const FourOFour = () => {
  const history = useHistory()

  return (
    <div className="FOF-container">

      <div className='FOF-image-container'>
        <div className='FOF-header'>404</div>
        <div className='FOF-body'>THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</div>
        <img className='FOF-image' src={fof}></img>
        <div className='FOF-home-container'>
          <div className='FOF-home' onClick={() => history.push(`/`)}>Go back home</div>

        </div>
      </div>
    </div>
  )
}

export default FourOFour;
