// ARRAY OF APPOINTMENTS FOR GIVEN DAY
export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) return [];
  const selectedDay = state.days.find((d) => d.name === day);
  if (!selectedDay) {
    return [];
  }
  const appointments = selectedDay.appointments.map((id) => state.appointments[id]);
  return appointments;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };
};

// ARRAY OF INTERVIEWERS FOR DAY
export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) return [];
  const selectedDay = state.days.find((d) => d.name === day);
  if (!selectedDay) {
    return [];
  }
  const interviewers = selectedDay.interviewers.map((id) => state.interviewers[id]);
  return interviewers;
};