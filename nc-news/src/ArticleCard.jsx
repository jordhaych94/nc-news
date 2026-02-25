import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./comments";

function ArticleCard() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    fetch(
      `https://nc-news-backend-xadn.onrender.com/api/articles/${article_id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setArticle(data.articles);
      })
      .catch((error) => console.error("Error:", error));
  }, [article_id]);

  if (isLoading) return <div className="loader"></div>;

  return (
    <>
      <div className="article-card">
        <img src={article[0].article_img_url} alt={article.title} />
        <p>
          Author: {article[0].author} | Topic: {article[0].topic} | Created at:{" "}
          {article[0].created_at}
        </p>
        <h3>{article[0].body}</h3>
        <p>
          Votes: {article[0].votes} <button>upvote</button> | Comments: {}
        </p>
      </div>
      <div>
        <Comments />
      </div>
    </>
  );
}

export default ArticleCard;
