// ARRAY OF APPOINTMENTS FOR GIVEN DAY
export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) return [];
  const selectedDay = state.days.find((d) => d.name === day);
  if (!selectedDay) {
    return [];
  }
  const appointments = selectedDay.appointments.map((id) => state.appointments[id]);
  return appointments;
  // const filterDay = state.find(item => day === item.name);
  // if (filterDay.length < 1 || filterDay === undefined) {
  //   return [];
  // }
  // const daysAppointment = filterDay.appointments.map(id => appointments[id]);
  // return daysAppointment;
}
