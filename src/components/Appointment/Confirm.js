import React from "react";

export default function Deleting(props) {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button danger>{props.onCancel}</Button>
        <Button danger>{props.onConfirm}</Button>
      </section>
    </main>
  );
}
