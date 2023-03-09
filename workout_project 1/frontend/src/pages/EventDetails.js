import React from "react";
import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const params = useParams();
  return (
    <div>
      <h1>EventDetailsPage</h1>
      {params.e_id}
    </div>
  );
}

export default EventDetailsPage;
