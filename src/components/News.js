import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =  [
        {
            "source": {
                "id": "news-com-au",
                "name": "News.com.au"
            },
            "author": "Jai Bednall",
            "title": "Cricket fans fume at Ashes ‘disgrace’",
            "description": "If Bazball is going to achieve what Brendon McCullum and Ben Stokes hope it will and change the game forever, they&rsquo;re going to have to take the cameramen on the journey.",
            "url": "https://www.news.com.au/sport/cricket/cricket-fans-fume-at-ashes-disgrace-worst-ive-ever-seen/news-story/6bf70e24e3e6b182cefc901ece4f0a62",
            "urlToImage": "https://content.api.news/v3/images/bin/02b3efc8ce1ff9750adf341061e0336e",
            "publishedAt": "2023-07-07T15:43:00Z",
            "content": "If Bazball is going to achieve what Brendon McCullum and Ben Stokes hope it will and change the game forever, they’re going to have to take the cameramen on the journey.\r\nAnother breathtaking Stokes … [+2558 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor(){
        super();
        console.log("hi i am a news componene=t constructor");
        this.state = {
            articles : this.articles
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <div className='row'>
                    <div className='col-md-3'>
                    <NewsItem/>
               
                    </div>
                    <div className='col-md-3'>
                    <NewsItem/>
               
                    </div>
                    <div className='col-md-3'>
                    <NewsItem/>
               
                    </div>
                </div>
                
               
                </div>

        )
    }
}

export default News