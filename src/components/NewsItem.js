import React from "react";

const NewsItem = (props)=>{

    let { title, description, url, imageUrl, author, time, source} = props;
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={
              !imageUrl
                ? "https://www.livemint.com/lm-img/img/2023/08/08/600x338/11r_5g_1676953434658_1691480169340.png"
                : imageUrl
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <button type="button" className="btn btn-success">
              <span className="badge badge-light">{!source?"Anonymous": source}</span>
            </button>
            <p className="card-text">{description}...</p>
            <p className="card-text text-left">
              <small className="text-muted">
                Published by {!author ? "Anonymous" : author} on{" "}
                {new Date(time).toGMTString()}
              </small>
            </p>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More.
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;