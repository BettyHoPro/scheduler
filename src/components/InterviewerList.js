import React from "react";
import classnames from "classnames";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  // const listClass = classnames("interviewers", {
  //    "interviewers__header--selected": true,
  //    "interviewers__list": true,
  // });
  const interviewerList = props.interviewers.map((interviewerIndivisiual) => {
    return (
      <InterviewerListItem
        key={interviewerIndivisiual.id}
        name={interviewerIndivisiual.name}
        avatar={interviewerIndivisiual.avatar}
        selected={interviewerIndivisiual.id === props.interviewer}
        setInterviewer={props.setInterviewer}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  );
}
