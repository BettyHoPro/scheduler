import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  let interviewerListClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  let imageClass = classnames("interviewers__item", {
  "interviewers__item-image--selected": props.selected,
  });

  return (
    <li className={interviewerListClass}>
      <img
        key={props.id}
        className={imageClass}
        src={props.avatar}
        alt={props.name}
        onClick={() => props.setInterviewer(props.name)}
      />
      {props.name}
    </li>
  );
}
