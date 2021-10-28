import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import './Content.scss'

const Content = ({newsArray, newsResults}) => {
    return (
        <Container maxWidth ="md">
            <div className = "content">
                

                {newsArray.map((newsItem) => (
                        <NewsCard newsItem={newsItem} key={newsItem.title} />
                    ))}

            </div>
        </Container>

    )
}

export default Content