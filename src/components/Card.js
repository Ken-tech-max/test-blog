import React from "react";
import faker from "faker";
import LazyLoader from "./LazyLoader";
import "./Card.css";

export default function Card({ src }) {
  return (
    <article className="card">
      <div className="info">
        <h3 className="name">
          {faker.name.firstName(1)} {faker.name.lastName(1)}
        </h3>
        <h4 className="email">{faker.internet.email()}</h4>
        <p className="desc">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </p>
      </div>
      <div>
        <LazyLoader src={src} threshold={[0, 0.5, 1]} />
      </div>
    </article>
  );
}
