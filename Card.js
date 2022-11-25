
import './Card.css';
function Card(props) 
{
    return (
      <div className='left-main'>
        <h6>{props.cardData}</h6>
        <p className="runs">{props.runsData}</p>
      </div>
    );
}

export default Card;