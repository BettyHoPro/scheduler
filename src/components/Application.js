import React, {useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id:3,
    time:"2pm",
    interview: {
      student: "Alice Alison",
      interviewer: {
        id: 2,
        name:"Tori Malcolm",
        avatar: "https://i.imgur.com/Nmx0Qxo.png" 
      }
    } 
  },
  {
    id: 4,
    time: "10am"
  },
  {
    id:5,
    time:"5pm",
    interview: {
      student: "Tommy Chen",
      interviewer: {
        id: 4,
        name: "Cohana Roy", 
        avatar: "https://i.imgur.com/FK8V841.jpg"
      }
    } 
  }
];


export default function Application(props) {
  const [days, setDay] = useState([]); // Monday-> initial state, day= Monday, setDay = function 
  useEffect(() => {
    axios.get("/api/days")
    .then((response) => {
      console.log(response);
      setDay(response.data);
    });
  }, []);
  const appointment = appointments.map( appointment => {
    return ( <Appointment key={appointment.id} {...appointment} />)
  })
 
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
