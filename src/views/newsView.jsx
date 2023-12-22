function NewsView(props) {
    function news() {
      /*Will display the top-three articales from the fetch*/
      const news = [];
      for (let i = 0; i < 3; i++) {
        news.push(
          <div key={i}>
            {/*The article title*/}
            <h3>{props.newsData.items[i].title}</h3>
  
            {/*Image belonging to the article*/}
            <img src={props.newsData.items[i].images.thumbnail} height={"100"} />
  
            {/*Text excerpt from the article*/}
            <p>{props.newsData.items[i].snippet}</p>
  
            {/*Link to the actual article*/}
            <div className="moreInformation">
              <a href={props.newsData.items[i].newsUrl} target="_blank">
                More information
              </a>
            </div>
          </div>,
        );
      }
      return news;
    }
  
    return (
      <div className="ParentContainer newsContainer">
        {/*Displays the local news with a boarderaround it*/}
        <h2> Local astronomical news </h2>
        <div className="boarderAndStackable newsScroll">{news()}</div>
      </div>
    );
  }
  
  export default NewsView;