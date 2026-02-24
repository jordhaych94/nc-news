import { useEffect, useState } from "react";

function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("https://nc-news-backend-xadn.onrender.com/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.users);
        console.log(data.users);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!user)
    return (
      <header className="header">
        <img className="logo" src="./public/news.svg" alt="nc news logo" />
        <h1>NC NEWS</h1>{" "}
      </header>
    );

  return (
    <header className="header">
      <img className="logo" src="./public/news.svg" alt="nc news logo" />
      <h1>NC NEWS</h1>
      <div>
        <img
          className="profile-img"
          src={user[1].avatar_url}
          alt="profile image"
        />
        <p>{user[1].username}</p>
      </div>
    </header>
  );
}

export default Header;
