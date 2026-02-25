import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    fetch(
      `https://nc-news-backend-xadn.onrender.com/api/articles/${article_id}/comments`,
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setComments(data.comments);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, [article_id]);

  if (isLoading) return <p>Loading comments...</p>;

  return (
    <>
      <section>
        <h3>Comments</h3>
        <form action="">
          <input placeholder="What's on your mind?"></input>
          <button type="submit">Post comment</button>
        </form>
        {comments.map((comment) => (
          <div key={comment.comment_id}>
            <p>author: {comment.author}</p>{" "}
            <p>Posted on: {comment.created_at}</p>
            <p>{comment.body}</p>
            <hr />
          </div>
        ))}
      </section>
    </>
  );
}

export default Comments;
