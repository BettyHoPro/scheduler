import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  let interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  let imageClass = classnames("interviewers__item", {
  "interviewers__item-image--selected": props.selected,
  });
  // id:number - the id of the interviewer
  // name:string - the name of the interviewer
  // avatar:url - a url to an image of the interviewer
  // selected:boolean - to determine if an interview is selected or not
  // setInterviewer:function - sets the interviewer upon selection

  return (
    <li className="interviewerClass">
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
