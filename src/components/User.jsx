import React, { useEffect, useState } from "react";
import "./User.css";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [infos, setInfos] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInfos(data));
  });
  return (
    <>
      {infos &&
        infos
          // eslint-disable-next-line eqeqeq
          .filter((info) => info.id == id)
          .map((info) => (
            <div key={info.id} className="user_container">
              <h2>-name: {info.name}</h2>
              <h2>-username: {info.username}</h2>
              <h2>-email: {info.email}</h2>
              <h2>-phone: {info.phone}</h2>
              <h2>-company: {info.company.name}</h2>
              <h2>-website: {info.website}</h2>
              <h2>-address: </h2>
              <ul>
                <li>street: {info.address.street}</li>
                <li>suite: {info.address.suite}</li>
                <li>city: {info.address.city}</li>
                <li>zipcode: {info.address.zipcode}</li>
              </ul>
            </div>
          ))}
    </>
  );
}

export default User;
