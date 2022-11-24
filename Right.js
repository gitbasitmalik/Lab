import { useState } from "react";
import "./Right.css";

function Right() {
    const[score,setScore]=  useState([
        {
            name: "Quaid e Azam Trophy",   
            team1: "Sindh*",
            team2: "Balouchistan",
            tscore: "349/1",
            over: "(70.5 ov)"

        },
        {
            name: "",
            team1: "Central Punjab*",
            team2: "Southern Punjab",
            tscore: "452/4",
            over: "(90 ov)"

        },
        {
            name: "",
            team1: "North (Pakistan)*",
            team2: "Kyber Pakhtoonkhawa",
            tscore: "250/8",
            over: "(50.5 ov)"


        }
    ]);
    
       
    
    return ( 
        <div>
            {score.map((totalscore) => (
        <div>
          <div class="wrapper">
            <div class="grid grid--4">
              <div class="grid__item">
                <article>
                    <h4>{totalscore.name}</h4>
                  <h6>{totalscore.team2}</h6>
                </article>
                
                <article>
                  <h6>{totalscore.team1} &nbsp;  &nbsp; &nbsp; &nbsp;
                  <span>{totalscore.tscore}</span> <span>{totalscore.over}</span>
                  </h6> 
                </article>
                <br></br>
                <br></br>
                
              </div>
            </div>
          </div>
        </div>
      ))}

        </div>
        
     );
}

export default Right;
