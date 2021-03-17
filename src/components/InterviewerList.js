import React from "react";
// import classnames from "classnames";
import "components/InterviewerList.scss";
// import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  const interviewerList = props.interviewers.map((interviewerIndivisual) => {
    return (
      <interviewerListItem
        key={interviewerIndivisual.id}
        name={interviewerIndivisual.name}
        avatar={interviewerIndivisual.avatar}
        selected={interviewerIndivisual.id === props.interviewer}
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
