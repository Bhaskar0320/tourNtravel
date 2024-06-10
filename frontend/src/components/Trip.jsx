import React from "react";
import "./Trip.css";
import trip1 from "../assests/trip1.jpg";
import TripData from "./TripData";

function Trip() {
  return (
    <div>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps</p>
      </div>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Trip to venice"
          text="Venice Italy is an Italian city located in the northeast of the State. Venice, Venezia in Italian, is best known for its beauty, canals, architecture, and art. But there is more! This small city founded in the middle of a lagoon has been one the most powerful European States for several centuries, giving birth to a culture and lifestyle that are incredibly unique. "
        />
         <TripData
          image={trip1}
          heading="Trip to venice"
          text="Venice Italy is an Italian city located in the northeast of the State. Venice, Venezia in Italian, is best known for its beauty, canals, architecture, and art. But there is more! This small city founded in the middle of a lagoon has been one the most powerful European States for several centuries, giving birth to a culture and lifestyle that are incredibly unique. "
        />
         <TripData
          image={trip1}
          heading="Trip to venice"
          text="Venice Italy is an Italian city located in the northeast of the State. Venice, Venezia in Italian, is best known for its beauty, canals, architecture, and art. But there is more! This small city founded in the middle of a lagoon has been one the most powerful European States for several centuries, giving birth to a culture and lifestyle that are incredibly unique. "
        />
      </div>
    </div>
  );
}

export default Trip;
