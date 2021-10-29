import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import apikey from "../../data/config";
import category from "../../data/category";

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [newsListDefault, setnewsListDefault] = useState();
    const [newsList, setnewsList] = useState();

    const fetchData = async () => {
        return await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}`)
        .then(response => response.json())
        .then(data => {
            setnewsList(data)
            setnewsListDefault(data)
        });
    }

    const updateInput = async (input) => {
        const filtered = newsListDefault.filter(news => {
            return news.title.toLowercase().includes(input.toLowercase())
        })
        setInput(input);
        newsList(filtered);
    }

    useEffect ( () => {fetchData()},[]);

    return (
        <>
        <SearchBar
        input = {input}
        onChange={updateInput}/>
        <SearchList newsList={newsList}/>
        </>
    );  
    
}

export default SearchPage;