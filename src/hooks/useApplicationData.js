import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = remainSpots(appointments, state);

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => setState({ ...state, appointments, days }));
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = remainSpots(appointments, state);
    return axios
      .delete(`/api/appointments/${id}`, { interview })
      .then(() => setState({ ...state, appointments, days }));
  }

  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  const remainSpots = function(appointments, state) {
    let days = [...state.days];
    state.days.forEach(day => {
      let bookedSpot = 0;
      day.appointments.forEach( id => appointments[id].interview && bookedSpot ++ );

      days[day.id - 1].spots = 5 - bookedSpot;

      console.log(`${day.name}: ${5 - bookedSpot} spots left.`);
    })
    return days;
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
