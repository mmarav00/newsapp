import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/navbar';
import './components/navbar.scss'
import axios from "axios";
import apikey from './data/config';
import  SearchPage  from './components/SearchBar/SearchPage.js';



function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults]= useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {

      const news = await axios.get (
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}&pageSize=${loadMore}`
        );
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);

    }catch (error){
      console.log(error);
    }
  };

  console.log(newsArray);

  useEffect(() => {
    newsApi(); // eslint-disable-next-line
  }, [newsResults, category, loadMore]);

  return (
    <div className="App">
    <Navbar setCategory= {setCategory}/>
    <SearchPage newsArray={newsArray}/>
    <Content
    loadMore={loadMore}
    setLoadMore={setLoadMore}
    newsArray={newsArray}
    newsResults={newsResults}/>
    
    </div> 
  );
}

export default App;
