import React from "react";
import classnames from "classnames";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";


export default function InterviewerList(props) {
  const interviewer = props.interviewers.map((interviewer) => {
    return (
      <interviewerListItem 
      key={interviewer.id}
      name={interviewer.name} 
      avatar={interviewer.avatar} 
      selected={interviewer.name === props.interviewer}
      setInterviewer={props.setInterviewer} />
    )
  });
};

