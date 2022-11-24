import React from 'react';
import './Card.css';
import { BiChevronRight } from 'react-icons/bi'
function Card({ card }) {
    return (
        <div className='card-main'>
            {
                card.map((ca) => (
                    <div className='card-container' key={ca.id}>
                        <span className='card-heading'>{ca.heading}</span>
                        <hr className='card-hr' />
                        <div>
                        {
                            ca.subItem.map((sub)=>(
                                <span className='card-text'><BiChevronRight />{sub.cardText}</span>
                            ))
                        }
                        </div>
                        
                    </div>
                ))
            }
      </div>
);
}

export default Card;