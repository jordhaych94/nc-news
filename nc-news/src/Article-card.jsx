import { useEffect, useState } from "react";

function ArticleCard() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nc-news-backend-xadn.onrender.com/api/articles/1`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setArticle(data.articles);
        console.log(data.articles);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (isLoading) return <div className="loader"></div>;

  return (
    <>
      <div className="article-card"></div>
    </>
  );
}

export default ArticleCard;
