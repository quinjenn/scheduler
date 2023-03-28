// import React from "react";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment";


// use custom hook to provide state and actions used to change the state
export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const interviewers = getInterviewersForDay(state, state.day);

  const appointments = getAppointmentsForDay(state, state.day).map(
    appointment => {
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
          interview={getInterview(state, appointment.interview)}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
      );
    }
  );

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
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        <section className="schedule">
          {appointments}
          <Appointment key="last" time="5pm" />
        </section>
      </section>
    </main>
  );
}

// export default function Application(props) {
//   const [state, setState] = useState({
//     day: "Monday",
//     days: [],
//     appointments: {},
//     interviewers: {},
//   });

//   function bookInterview(id, interview) {
//     console.log(id, interview);
//     const appointment = {
//       ...state.appointments[id],
//       interview: { ...interview }
//     };
//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };
//     return axios.put(`/api/appointments/${id}`, { interview })
//       .then((response) => {
//         setState({ ...state, appointments });
//         return response.status;
//       });
//   }


//   function cancelInterview(id) {
//     const appointment = {
//       ...state.appointments[id],
//       interview: null
//     };

//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };

//     return axios.delete(`/api/appointments/${id}`, { id })
//       .then((response) => {
//         setState({ ...state, appointments });
//         return response.status;
//       });
//   }

//   const setDay = day => setState({ ...state, day });
//   useEffect(() => {
//     Promise.all([
//       axios.get('/api/days'),
//       axios.get('/api/appointments'),
//       axios.get('/api/interviewers')
//     ]).then((all) => {
//       console.log(all);
//       setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
//     });
//   }, []);
//   const dailyAppointments = getAppointmentsForDay(state, state.day);
//   const interviewers = getInterviewersForDay(state, state.day);


//   const schedule = dailyAppointments.map((appointment) => {
//     const interview = getInterview(state, appointment.interview);

//     return (
//       <Appointment
//         key={appointment.id}
//         id={appointment.id}
//         time={appointment.time}
//         interview={interview}
//         interviewers={interviewers}
//         bookInterview={bookInterview}
//         cancelInterview={cancelInterview}
//       />
//     );
//   });
//   return (
//     <main className="layout">
//       <section className="sidebar">
//         <img
//           className="sidebar--centered"
//           src="images/logo.png"
//           alt="Interview Scheduler"
//         />
//         <hr className="sidebar__separator sidebar--centered" />
//         <nav className="sidebar__menu">
//           <DayList
//             days={state.days}
//             day={state.day}
//             onChange={setDay}
//           /></nav>
//         <img
//           className="sidebar__lhl sidebar--centered"
//           src="images/lhl.png"
//           alt="Lighthouse Labs"
//         />
//       </section>
//       <section className="schedule">
//         {schedule}
//         <Appointment key="last" time="5pm" />
//       </section>
//     </main>
//   );
// }
