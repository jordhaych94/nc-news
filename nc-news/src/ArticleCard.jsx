import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./comments";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";

function ArticleCard() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [vote, setVote] = useState(0);

  const { article_id } = useParams();

  useEffect(() => {
    fetch(
      `https://nc-news-backend-xadn.onrender.com/api/articles/${article_id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setArticle(data.articles);
        console.log(data.articles);
      })
      .catch((error) => console.error("Error:", error));
  }, [article_id]);

  if (isLoading) return <div className="loader"></div>;

  function handleUpVotes() {
    console.log("button clicked");

    if (vote === 0) {
      setVote(1);
      fetch(
        `https://nc-news-backend-xadn.onrender.com/api/articles/${article_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ inc_votes: 1 }),
        },
      ).catch((error) => {
        console.error("Error:", error);
        setVote(0);
      });
    } else {
      setVote(0);
      fetch(
        `https://nc-news-backend-xadn.onrender.com/api/articles/${article_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ inc_votes: -1 }),
        },
      ).catch((error) => {
        console.error("Error:", error);
        setVote(1);
      });
    }
  }

  function handleDownVotes() {
    console.log("button clicked");

    if (vote === 0) {
      setVote(-1);
      fetch(
        `https://nc-news-backend-xadn.onrender.com/api/articles/${article_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ inc_votes: -1 }),
        },
      ).catch((error) => {
        console.error("Error:", error);
        setVote(0);
      });
    } else {
      setVote(0);
      fetch(
        `https://nc-news-backend-xadn.onrender.com/api/articles/${article_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ inc_votes: +1 }),
        },
      ).catch((error) => {
        console.error("Error:", error);
        setVote(1);
      });
    }
  }

  return (
    <>
      <div className="article-card">
        <h1>{article[0].title}</h1>
        <img src={article[0].article_img_url} alt={article.title} />
        <p>
          {article[0].author} | Topic: {article[0].topic} | Created at:{" "}
          {article[0].created_at}
        </p>
        <h4>{article[0].body}</h4>
        <BiUpvote
          className="vote-btn"
          onClick={() => {
            handleUpVotes();
          }}
        />{" "}
        {article[0].votes + vote}{" "}
        <BiDownvote
          className="vote-btn"
          onClick={() => {
            handleDownVotes();
          }}
        />
        <br />
        <FaCommentDots /> {article[0].comment_count}
      </div>
      <div>
        <Comments />
      </div>
    </>
  );
}

export default ArticleCard;
