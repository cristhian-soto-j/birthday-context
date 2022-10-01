import { useQuery } from "react-query";
import { NewsCard } from "./NewsCard";

export const NewsList = ({ month, year }) => {
  const m = month;
  const y = year;

  const getNews = async () => {
    const res = await fetch(
      `https://polar-lowlands-86892.herokuapp.com/https://api.nytimes.com/svc/archive/v1/${y}/${m}.json?api-key=j0zuUoaUo2lUuqXNlfMF9bIF3Vo3LnDK`
    );
    return res.json();
  };

  const { data, status, isFetched } = useQuery(["news"], getNews);

  if (!data) {
    console.log("NO DATA");
  } else {
    console.log("DATA");
  }

  if (status === "loading") {
    return <div>Recuperando las noticias...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="container container-cards">
      <div className="newsCards">
        {data?.response.docs.map((news, index) => {
          if (index < 5) {
            return (
              <div className="card" key={news._id}>
                <NewsCard news={news} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
