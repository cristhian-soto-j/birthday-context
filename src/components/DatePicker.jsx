import { useState } from "react";
import { BirthdayContext } from "../BirthdayContext";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="container container-general">
        <BirthdayContext month={month} year={year} />
        <Button variant="primary" type="submit" onClick={handleClick}>
          Reset
        </Button>
      </div>
    );
  } else {
    return (
      <div className="container-form">
        <Form.Control
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
