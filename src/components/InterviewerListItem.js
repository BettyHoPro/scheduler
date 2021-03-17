import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";
// import { action } from "@storybook/addon-actions";

export default function InterviewerListItem(props) {
  let interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  // let imageClass = classnames("interviewers__item-image", {
  // "interviewers__item-image--selected": props.selected,
  // });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image" 
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
