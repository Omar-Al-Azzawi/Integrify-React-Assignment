import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ name, username, website, id }) {
  const [infos, setInfos] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInfos(data));
  });

  return (
    <div className="card_container">
      {infos &&
        infos.map((info) => (
          <div key={info.id} className="card">
            <h1>{info.name[0]}</h1>
            <h3>{info.name}</h3>
            <p>@{info.username}</p>
            <p>
              <a href="#">http://{info.website}</a>
            </p>
            <Link to={`/users/${info.id}`}>
              <button>MORE DETAILS</button>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Card;
