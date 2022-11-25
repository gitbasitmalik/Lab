import React, { useState } from 'react';
import Card from './Card';
 function Left() {
    const [cardDetails, setCardDetails] = useState("Pakistan*");
    const [runs , setRuns] = useState("(152/0 ov)");
    const [cardDetails1, setCardDetails1] = useState("New zealand");
    const [cardDetails2, setCardDetails2] = useState("South Africa");
    const [cardDetails3, setCardDetails3] = useState("India*");
    const [runs1 , setRuns1] = useState("(152/8 ov)");


   
  return(
    
    <div>

    <Card cardData = {cardDetails}/>
    <Card cardData = {cardDetails1}/>
    <Card runsData = {runs}/>
    <br></br>
    <Card cardData = {cardDetails2}/>
    <Card cardData = {cardDetails3}/>
    <Card runsData = {runs1}/>
 
    </div>
);
}

export default Left;