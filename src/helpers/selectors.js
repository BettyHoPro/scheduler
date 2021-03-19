export function getAppointmentsForDay(state, day) {
  // const copyState = {...state};
  //get the selected day appointments' ids
  const { days, appointments } = state;
  if (days.length === 0) return [];

  const checkDayExsit = days.filter((dayX) => dayX.name === day);
  if (checkDayExsit.length > 0) {
    const selectedDayAppoints = checkDayExsit[0].appointments;
    return selectedDayAppoints.length > 0
      ? selectedDayAppoints.map((appointID) => appointments[appointID])
      : selectedDayAppoints;
  }
  return [];
}

export function  getInterview(state, interview) {
  if (interview == null) {
    return null;
  }
  const result = {...interview};
  result["interviewer"] = state.interviewers[interview.interviewer];
  return result;
}
