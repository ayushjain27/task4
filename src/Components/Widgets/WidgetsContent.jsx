import React, { useState, useEffect } from 'react';

const WidgetsContent = (props) => {
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=8ad4546b25ec4fac8909506a3f720c7e&pageSize=3`
    );
    const json = await response.json();
    console.log(json.articles);
    setArticles(json.articles);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
        <div className="container my-3">
          <h2 className='my-3'>{props.heading}</h2>
            <div className="row">
                 {articles.map((element) => {
                    return (
                      <>
                            <div className="col-md-4" key={element.url}>
                              <div className="card" style={{ borderRadius: '24px' }}>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    position: "absolute",
                                    right: "0",
                                  }}
                                >
                                  <span class="badge rounded-pill bg-danger">
                                    {element.source.name}
                                  </span>
                                </div>
                                <img
                                  src={!element.urlToImage ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxy5rKrp2go6GaUrzqbYw9nTSYKntDbnu7bQ&usqp=CAU" : element.urlToImage}
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {element.title ? element.title.slice(0, 45) : ""}
                                  </h5>
                                  <p className="card-text">
                                    {element.description
                                      ? element.description.slice(0, 88)
                                      : ""}
                                    ...
                                  </p>
                                  <p className="card-text">
                                    <small class="text-muted">
                                      By {!element.author ? "Unknown" : element.author} on {new Date(element.publishedAt).toGMTString()}
                                    </small>
                                  </p>
                                  <a
                                    rel="noreferrer"
                                    href={element.url}
                                    target="_blank"
                                    className="btn btn-sm btn-dark"
                                  >
                                    Read more
                                  </a>
                                </div>
                              </div>
                            </div>
                            </>
                          );
                        })}
                  </div>
            </div>
    </>
  )
}

export default WidgetsContent;
