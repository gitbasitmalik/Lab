import "./Middle.css"
import { useState } from "react";
function Middle() 
{

    const [card, setCard] = useState([
        {
          id:"1",
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
          id:"2",
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
            id:"2",
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
          id:"3",
          image: (
            <img
              src="https://static.toiimg.com/thumb/msid-76493382,width-400,resizemode-4/76493382.jpg"
              alt=""
            ></img>
          ),
          text: "Pakistan Win T20 World Cup. Younis Khan was Captain at that time",
          other: "Shaheen Shah is Injured and had a recovery soon",
          
        }])
        function handleDelete(id)
    {
        const Delete = card.filter((cardDelete)=>cardDelete.id !== id);
        setCard(Delete);

    }

    return (  
        <div className="flex">
      {card.map((cdata) => 
      (
        <div >
          <article class="card" key={cdata.id}>
      <div class="card__thumb">{cdata.image}</div>
      <div class="card__content">
        <h3 class="card__title">{cdata.text}</h3>
        <p class="card__author">{cdata.other}</p>
      </div>
      <button className="delete-btn" onClick={()=>handleDelete(cdata.id)}>Delete</button>
      
      <hr></hr>
     
  </article>
        </div>

 
      ))}
      
    </div>
    );
}

export default Middle;