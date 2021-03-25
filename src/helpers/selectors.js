export function getAppointmentsForDay(state, day) {
  //get the selected day appointments' ids
  const { days, appointments } = state;
  if (days.length === 0) return [];

  // if the day is exit than the array should greater than 0
  const checkDayExist = days.filter((dayX) => dayX.name === day);
  if (checkDayExist.length > 0) {
    const selectedDayAppoints = checkDayExist[0].appointments;

    //if the day is exist return back else return null
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

// check the day if it has interviewers
export function getInterviewersForDay(state, day) {
  const { days, interviewers } = state;
  if (days.length === 0) return [];

  const checkDayExist = days.filter((dayX) => dayX.name === day);
  if (checkDayExist.length > 0) {
    const selectedDayInterviewers = checkDayExist[0].interviewers;
    return selectedDayInterviewers.length > 0
      ? selectedDayInterviewers.map((interviewerID) => interviewers[interviewerID])
      : selectedDayInterviewers;
  }
  return [];
}
