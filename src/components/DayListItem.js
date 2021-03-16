import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";
// import { action } from "@storybook/addon-actions";

export default function DayListItem(props) {
  let dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !(props.spots),
  });
  function formatSpots(){
    if (props.spots === 0) {
      return "no spots remaining";
    } else {
      return `${props.spots} spot${ props.spots >= 2 ? "s" : "" } remaining`
    }
  }
  
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className='text--regular'>{props.name}</h2>
      <h3 className='text--light'>{formatSpots()}</h3>
    </li>
  );
};

