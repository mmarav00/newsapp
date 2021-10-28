import React from 'react'
import "./NewsCard.scss"

export const NewsCard = ({newsItem}) => {
    return (
        
        <div className ="newsCard">
            <span className='title'>{newsItem.title}</span>
            <br></br>
            <img alt={newsItem.title} src={newsItem.urlToImage ? newsItem.urlToImage : "https://www.vrajfresh.com/wp-content/uploads/2020/09/default_image.png"}
            className='newsImage'/>

            <div className='newsText'>
            
                <div>
                
                    <span className='author'>
                        <a href= {newsItem.url}></a>
                        <br></br>
                         by {newsItem.author ? newsItem.author : "unknown"}
                    </span>
                </div>
                <div className='lowerNewsText'>
                    <div className='description'>
                        {newsItem.description}
                        <br></br>
                        <span className='readmore'> 
                            read more at {" "}
                            <a href={newsItem.url} target="__blank">
                                <b>{newsItem.source.name}</b>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;