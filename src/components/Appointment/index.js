import React from "react";
// import { action } from "@storybook/addon-actions";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
// import getInterviewersForDay from "../helpers/selectors";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* { props.interview ? 
      <Show student={props.interview.student} interviewer={props.interview.interviewer}/> :
      <Empty />} */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      )}
      {mode === CREATE &&  
      <Form
      interviewers={props.interviewers}
      // onSave={props.onSave}
      onCancel={() => back(EMPTY)}
    />} 
    </article>
  );
}
