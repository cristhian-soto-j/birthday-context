import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

export const NewsCard = ({ news }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="item" key={news._id}>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="abstract-text"
        aria-expanded={open}
      >
        {news.headline.print_headline}
      </Button>
      <Collapse in={open} dimension="width">
        <div id="abstract-text">
          <Card>{news.abstract}</Card>
        </div>
      </Collapse>
    </div>
  );
};
