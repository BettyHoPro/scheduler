import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  let interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  let imageClass = classnames("interviewers__item-image", {
  "interviewers__item-image--selected": props.selected,
  });

  return (
    <li className={interviewerClass}>
      <img
        key={props.id}
        className={imageClass}
        src={props.avatar}
        alt={props.name}
        onClick={() => props.setInterviewer(props.name)}
      />
      {props.selected && props.name}
    </li>
  );
}
