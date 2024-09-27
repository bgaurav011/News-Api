import React, { Component } from 'react'
import Newsitem, { NewsItem } from './NewsItem'

export class News extends Component {
  articals = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "By <a href=\"/profiles/tara-subramaniam\">Tara Subramaniam</a> and Christian Edwards, CNN",
      "title": "Russia's war in Ukraine: Live updates - CNN",
      "description": "Russian President Vladimir Putin has pledged to boost the mass production of drones and increase their deployment to the battlefield. Follow here for live updates.",
      "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-06-22-23/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230621171121-ukraine-troops-062023-super-tease.jpg",
      "publishedAt": "2023-06-22T10:04:00Z",
      "content": "Four missiles were fired at the Chonhar road bridge Thursday morning, with one hitting the structure, a representative of Russias Investigative Committee said in comments reported by Russian state ne… [+1970 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "Zach Harper",
      "title": "Celtics-Grizzlies-Wizards trade grades: Instant reaction with Smart, Porziņģis on the move - The Athletic",
      "description": "How did Boston add two first-rounders in this deal? And how did Washington get none?",
      "url": "https://theathletic.com/4629520/2023/06/22/nba-trade-grades-smart-porzingis-celtics-wizards-grizzlies/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/06/22011833/GettyImages-1437777410-1024x683.jpg",
      "publishedAt": "2023-06-22T09:58:14Z",
      "content": "A few hours after one three-team deal fell apart and the Washington Wizards were up against Kristaps Porziis player option deadline, the Boston Celticsfinally managed to get their big man upgrade and… [+5978 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Charles Trepany",
      "title": "Pharrell Williams' first Louis Vuitton show: Beyonce, more attend - USA TODAY",
      "description": "The Louis Vuitton Menswear Spring-Summer 2024 show kicked off in Paris Tuesday. See all the best A-list fashion moments here.",
      "url": "https://www.usatoday.com/story/entertainment/celebrities/2023/06/20/pharrell-williams-louis-vuitton-fashion-show-photos-beyonce-zendaya/70340303007/",
      "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/06/20/USAT/27d04e09-6590-4b60-93da-608173aed4be-AFP_AFP_33KJ99X.jpg?crop=8255,4644,x0,y419&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2023-06-22T09:48:54Z",
      "content": "Pharrell Williams' debut collection at Louis Vuitton attracted tons of attention as well as a flock of celebrity guests to the brand's Menswear Spring-Summer 2024 show in Paris Tuesday.\r\nThe breathta… [+3914 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "ZEN SOO Associated Press",
      "title": "Cooking gas explosion kills 31 people at a barbecue restaurant in northwestern China - ABC News",
      "description": "Authorities in northwestern China say 31 people have been killed and seven injured in a cooking gas explosion at a barbecue restaurant in the city of Yinchuan",
      "url": "https://abcnews.go.com/Business/wireStory/gas-explosion-kills-31-people-barbecue-restaurant-northwestern-100294030",
      "urlToImage": "https://s.abcnews.com/images/International/wirestory_52d6075722677d339e2acb033ca2a754_16x9_992.jpg",
      "publishedAt": "2023-06-22T09:25:34Z",
      "content": "HONG KONG -- Cooking gas caused a massive explosion at a barbecue restaurant in northwestern China, killing 31 people and injuring seven others during national celebrations on the eve of a long holid… [+3967 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Missing Titanic submersible: The factors that could affect crew's oxygen supply - BBC",
      "description": "Conditions aboard could be experienced differently person-to-person, experts say.",
      "url": "https://www.bbc.com/news/world-us-canada-65981277",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/120BD/production/_130171937_titanpa.jpg",
      "publishedAt": "2023-06-22T08:13:38Z",
      "content": "Media caption, Watch: What happens if the oxygen runs out\r\nIt is a claustrophobic, terrifying prospect - being trapped in a 22ft submersible, potentially thousands of feet underwater, with oxygen run… [+4305 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Spaceflight Now"
      },
      "author": null,
      "title": "Live coverage: Delta 4-Heavy to try again early Thursday – Spaceflight Now - Spaceflight Now",
      "description": null,
      "url": "https://spaceflightnow.com/2023/06/22/delta-4-heavy-nrol-68-coverage/",
      "urlToImage": null,
      "publishedAt": "2023-06-22T06:31:08Z",
      "content": "Watch a replay of our live coverage of the countdown and launch of a United Launch Alliance Delta 4-Heavy rocket with a classified spy satellite for the National Reconnaissance Office from Space Laun… [+12425 chars]"
    }
  ]


  constructor() {
    super();
    this.state = {
      articals: this.articals,
      loading: false
    }
  }

  async componentDidMount(){
    console.log("cdm")
    let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=fd362af41f0b4c6c965072e8e71ed513";
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
    
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h2>DailyNews-Top Headlins</h2>
        <div className="row">
          {this.state.articals.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):""} descriptiton={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
