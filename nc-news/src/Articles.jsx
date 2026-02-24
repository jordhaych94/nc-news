import { useEffect, useState } from "react";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nc-news-backend-xadn.onrender.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
        console.log(data.articles);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (isLoading) return <div class="loader"></div>;

  return (
    <>
      <div className="article-grid">
        {articles.map((article) => (
          <div key={article.article_id} className="article-card">
            <img src={article.article_img_url} alt={article.title} />
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Articles;
