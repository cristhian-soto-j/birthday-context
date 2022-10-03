import { useState } from "react";
import { BirthdayContext } from "../BirthdayContext";
import { Button, Form } from "react-bootstrap";

import "../styles/DatePicker.css";

export const DatePicker = () => {
  const [date, setDate] = useState("");
  const handleClick = () => {
    setDate("");
  };

  if (date) {
    let month = date.split("-")[1].split("0");
    if (month.length > 1) {
      month = month[1];
    }
    const year = date.split("-")[0];

    return (
      <div className="birthday-context">
        <BirthdayContext month={month} year={year} />
        <Button variant="primary" type="submit" onClick={handleClick}>
          Reset
        </Button>
      </div>
    );
  } else {
    return (
      <div className="intro-card-container">
        <p className="intro-text">
          Selecciona tu fecha de nacimiento para conocer cinco noticias
          publicadas, el mes y año en el que naciste, por el diario "The New
          York Times"
        </p>
        {/* <img
            className="ny-logo"
            alt="The New York Times"
            src="https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/img/logo-nyt-header.svg"
          ></img> */}

        <Form.Control
          className="date-picker"
          type="date"
          name="date_of_birth"
          placeholder="DateRange"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    );
  }
};
