import React from "react";
import faker from "faker";
import LazyLoader from "./LazyLoader";
import "./Card.css";

export default function Card({ src,
  author,
  content,
  description,
  publishedAt,
  title,
  url
}) {
  return (
    <a href={url}>
      <article className="card">
        <div className="info">
          <div className="author-caption" >
            <div className="author" dangerouslySetInnerHTML={{ __html: author }} />
              &middot; {publishedAt}
          </div>
          <h3 className="name">
            {title}
          </h3>
          <h4 className="email">{faker.internet.email()}</h4>
          <p className="desc">
            {content?content:description}
          </p>
        </div>
        <div>
          <LazyLoader src={src} threshold={[0, 0.5, 1]} width="125px" height="125px" />
        </div>
      </article>
    </a>
  );
}
