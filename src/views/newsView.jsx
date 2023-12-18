function NewsView(props){
    console.log("news data", props.newsData)

    function news() {
        const news = [];
        for (let i = 0; i < 3; i++) {
            news.push(
                <div key={i}>
                    <h3>{props.newsData.items[i].title}</h3>
                    <img src={props.newsData.items[i].images.thumbnail} height={"100"}/>
                    <p>{props.newsData.items[i].snippet}</p>
                    <a href={props.newsData.items[i].newsUrl}>More information</a> {/*Link to astronomical news source*/}
                </div>
            );
        }
    return news;
}

    return (
        <div className="localNews"> {/* Lägg till class för att rendera news som prototypen*/}
            <h2> Local astronomical news </h2>
            <div className="newsScroll">  {/* Lägg till class för att rendera dom 3 nyheterna bredvid varandra i kolumner (typ som grid) */}
                {news()}
            </div>
        </div>
    );
}

export default NewsView;