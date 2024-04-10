import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard(props) {
  return (
    <div key={props.index} className="card">
      <img src={props.item.urlToImage} alt="" />
      <div className="content">
        <p>{props.item.author}</p>
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
        <p>{props.item.content}</p>
      </div>
    </div>
  );
}
