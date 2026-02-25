import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nc-news-backend-xadn.onrender.com/api/topics")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setTopics(data.topics);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (isLoading) return <div className="loader"></div>;

  return (
    <>
      <div className="display-grid">
        {topics.map((topic) => (
          <div key={topic.slug} className="topic-card">
            <Link to="">
              <img src={topic.img_url} alt="{topic.description}" />
              <h3>{topic.slug}</h3>
            </Link>
            <p>Description: {topic.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Topics;
