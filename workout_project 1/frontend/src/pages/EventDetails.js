import React from "react";
import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailsPage() {
  const data = useRouteLoaderData('event-details')

  return (
    <div>
      <EventItem event={data.event}/>
    </div>
  );
}

export default EventDetailsPage;


export async function loader({request,params}){
  const id = params.eventId
  const response = await fetch('http://localhost:8080/events/'+ id)
  if(!response.ok){
throw json({message:'Could find the selected event'},{status:500})
  }else{
    return response
  }
}
