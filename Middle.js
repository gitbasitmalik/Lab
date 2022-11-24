import "./Middle.css"
import { useState } from "react";
function Middle() 
{

    const [card, setCard] = useState([
        {
          image: (
            <img
              src="https://static.toiimg.com/thumb/msid-76493382,width-400,resizemode-4/76493382.jpg"
              alt=""
            ></img>
          ),
          text: "Pakistan Win T20 World Cup. Younis Khan was Captain at that time",
          other: "Shaheen Shah is Injured and had a recovery soon",
          
        },
        {
            image: (
              <img
                src="https://static.toiimg.com/thumb/msid-76493382,width-400,resizemode-4/76493382.jpg"
                alt=""
              ></img>
            ),
            text: "Pakistan Win T20 World Cup. Younis Khan was Captain at that time",
            other: "Shaheen Shah is Injured and had a recovery soon",
            
          },
        {
          image: (
            <img
              src="https://static.toiimg.com/thumb/msid-76493382,width-400,resizemode-4/76493382.jpg"
              alt=""
            ></img>
          ),
          text: "Pakistan Win T20 World Cup. Younis Khan was Captain at that time",
          other: "Shaheen Shah is Injured and had a recovery soon",
          
        }])

    return (  
        <div>
      {card.map((cdata) => 
      (
      <article class="card">
      
        <div class="card__thumb">{cdata.image}</div>
        <div class="card__content">
          <h3 class="card__title">{cdata.text}</h3>
          <p class="card__author">{cdata.other}</p>
        </div>
        <hr></hr>
       
    </article>
    
      ))}
      
    </div>
    );
}

export default Middle;