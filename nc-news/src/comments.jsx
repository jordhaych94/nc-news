import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [vote, setVote] = useState(0);

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

  function handleChange(e) {
    setNewComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://nc-news-backend-xadn.onrender.com/api/articles/${article_id}/comments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          article_id,
          username: "grumpy19",
          body: newComment,
        }),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const updatedComents = [data.comment, ...comments];
        setComments(updatedComents);
        setNewComment("");
      });
  }

  return (
    <>
      <section>
        <h3>Comments</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Post a comment:
            <input type="text" value={newComment} onChange={handleChange} />
          </label>
          <input type="submit" />
        </form>
        <hr />

        {comments.map((comment) => (
          <div key={comment.comment_id}>
            <p>{comment.author}</p>
            <p>{comment.created_at}</p>
            <p>{comment.body}</p>
            <BiUpvote />
            {comment.votes} <BiDownvote />
            <hr />
          </div>
        ))}
        if({comments.author === 'grumpy19'}) {
          <button></button>
        }
      </section>
    </>
  );
}

export default Comments;
