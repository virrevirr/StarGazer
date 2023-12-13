function NewsView(props){
    console.log("news", props.newsData)

    function news() {
        const news = [];
        for (let i = 0; i < 3; i++) {
            news.push(
                <div key={i}>
                    <h3>{props.newsData.items[i].title}</h3>

                    <img src={props.newsData.items[i].images.thumbnail} height={"200"}/>

                    <p>{props.newsData.items[i].snippet}</p>

                    <a href={props.newsData.items[i].newsUrl}>More information</a> {/*Link to Astronomical events info*/}
                </div>
            );
        }
    return news;
}

    return (
        <div>
            <h2> Local astronomical news </h2>
            {news()}
        </div>
    );
}

export default NewsView;