import React from "react";
import { render} from "@testing-library/react";
import Appointment from "components/Appointment/index";

describe("Appointment", () => {
  it("renders Appointment without crashing", () => {
    render(<Appointment />);
  })
})