import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";
// import { action } from "@storybook/addon-actions";

export default function DayListItem(props) {
  let dayClass = classnames("DayListItem", {
    "day-list__item--selected": props.selected,
    "day-list__item--full":  !(props.spots) 
  });
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className='text--regular'>{props.name}</h2>
      <h3 className='text--light'>{props.spots}</h3>
    </li>
  );
};

