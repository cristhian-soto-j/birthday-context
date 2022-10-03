import { Collapse, Button, Card } from "react-bootstrap";
import { useState } from "react";
import "../styles/NewsCard.css";
export const NewsCard = ({ news }) => {
  const [open, setOpen] = useState(false);
  const pubDate = news.pub_date.split("-");

  return (
    <div className="newscard" key={news._id}>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="abstract-text"
        aria-expanded={open}
      >
        <div className="title">
          - .Titulo de la noticia .-
        </div>
        {news.headline.main}
      </Button>
      <Collapse in={open} dimension="width">
        <div className="card-container">
          <Card>
            <img
              className="ny-logo-card"
              alt="The New York Times"
              src="https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/img/logo-nyt-header.svg"
            ></img>
            <div className="abstract">{news.abstract}</div>
            <div className="date">
              {`publicado en el mes  ${pubDate[1]} del año ${pubDate[0]}`}
            </div>
          </Card>
        </div>
      </Collapse>
      <hr  className="separator" ></hr>
    </div>
  );
};
