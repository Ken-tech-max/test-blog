import React, { useEffect, useState } from "react";
import "./styles.css";
import * as images from "./images";
import Card from "./components/Card";
import axios from "axios";

function App() {

  const [articles, setArticle] = useState([]);

  useEffect(() => {
    axios.get('https://saurav.tech/NewsAPI/everything/cnn.json')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(articles);

        setArticle(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [])

  return (
    <main className="App">
      <header className="App-header">
        <h1>Blog list</h1>
        {/* <h3>Lazyloading</h3> */}
        <section className="wrapper">
          {articles.map((article, i) => (
            <Card src={article.urlToImage} key={i} 
            author = {article.author}
            content = {article.content}
            description = {article.description}
            publishedAt = {article.publishedAt}
            title = {article.title}
            url = {article.url}
            /> 
          ))}
        </section>
      </header>
    </main>
  );
}

export default App;
