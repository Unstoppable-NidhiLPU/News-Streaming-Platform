import React, {useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import PreLoader from "./PreLoader";
const News = (props) =>{
  const apiKey = "d3427fb2c91149fa89bb72d355f915da";
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalA, settotalA] = useState(0);
  

  const updateNews = async () => {
    props.setProgress(25);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // console.log(url);
    let parsedData = await fetch(url);
    let jsonData = await parsedData.json();
    props.setProgress(50);
    // console.log(jsonData);
    // setPage(page);
    setArticles(jsonData.articles);
    setLoading(false);
    settotalA(jsonData.totalResults);
    
    props.setProgress(100);
  };

  const pressNext = async () => {
      setPage(page+1);
      // console.log("Page ",page);
      await updateNews();
    
  };
  const pressPrevious = async () => {
    setPage(page-1);
    // console.log(page);
    await updateNews();
  };

  useEffect(() => {
    updateNews();// eslint-disable-next-line
  }, [])
  

    // console.log("This is render function");
    let div_Styling = { position: "relative", left: "40px", marginTop: "15px" };
    return (
      <div className="container mt-9">
        <h2 className="my-4 text-center" style={div_Styling}>
          Worldwide News Top-HeadLines
        </h2>
        {loading && <PreLoader></PreLoader>}
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url} style={div_Styling}>
                <NewsItem
                  title={element.title.slice(0, 50)}
                  description={
                    element.description
                      ? element.description.slice(0, 90)
                      : element.description
                  }
                  url={element.url}
                  imageUrl={element.urlToImage}
                  author={element.author}
                  time={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between m-10">
          {!loading && (
            <button
              disabled={page === 1? true: false}
              type="button"
              className="btn btn-dark"
              style={{
                position: "relative",
                left: "50px",
                marginTop: "15px",
                marginBottom: "50px",
              }}
              onClick={pressPrevious}
            >
              Previous
            </button>
          )}
          {!loading && (
            <button
              // disabled={checkForNext}
              disabled= {page >=
                Math.ceil(totalA / props.pageSize)
                ? true
                : false}
              type="button"
              className="btn btn-dark"
              style={{
                position: "relative",
                right: "80px",
                marginTop: "15px",
                marginBottom: "50px",
              }}
              onClick={pressNext}
            >
              Next
            </button>
          )}
        </div>
      </div>



    );

    
}
News.defaultProps = {
  pageSize: "5",
  category: "general",
  country: "in",
}


News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
  country: PropTypes.string,
};
export default News;