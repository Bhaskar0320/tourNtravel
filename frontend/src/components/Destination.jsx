import React from "react";
import "./Destination.css";
import DesinationData from "./DestinationData";
import manang1 from "../assests/manang1.jpg";
import manang2 from "../assests/manang2.jpg";

function Destination() {
  return (
    <div className="destination">
      <div className="des-heading">
        <h1>Popular Destination</h1>
        <p>Tours give you an opportunity to see a lot, witin a time frame</p>
      </div>
       <DesinationData 
       heading= "Manang, Nepal"
       text=" The Manang Valley is simply the paradise for trekking, tourist
       destination, The Manang trek offers you incredible Beauty of natural
       ,rich culture and spectacular views of Annapurna ranges. Manang is
       called the “crown jewel” of the famous Annapurna Circuit Trek."
       img1={manang1}
       img2={manang2}
       />
       <DesinationData 
       heading= "Manang, Nepal"
       text=" The Manang Valley is simply the paradise for trekking, tourist
       destination, The Manang trek offers you incredible Beauty of natural
       ,rich culture and spectacular views of Annapurna ranges. Manang is
       called the “crown jewel” of the famous Annapurna Circuit Trek."
       img1={manang1}
       img2={manang2}
       />
       <DesinationData 
       heading= "Manang, Nepal"
       text=" The Manang Valley is simply the paradise for trekking, tourist
       destination, The Manang trek offers you incredible Beauty of natural
       ,rich culture and spectacular views of Annapurna ranges. Manang is
       called the “crown jewel” of the famous Annapurna Circuit Trek."
       img1={manang1}
       img2={manang2}
       />
    </div>
  );
}

export default Destination;
