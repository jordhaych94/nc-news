import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nc-news-backend-xadn.onrender.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (isLoading) return <div className="loader"></div>;

  return (
    <>
      <div className="display-grid">
        {articles.map((article) => (
          <div key={article.article_id} className="article-card">
            <Link to={`/articles/${article.article_id}`}>
              <img src={article.article_img_url} alt={article.title} />
              <h3>{article.title}</h3>
            </Link>
            <div className="article-info">
              <hr />
              <p>Author: {article.author}</p>
              <p>Votes: {article.votes}</p>
              <FaCommentDots /> {article.comment_count}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Articles;
