import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/navbar';
import './components/navbar.scss'
import axios from "axios";
import apikey from './data/config';


function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults]= useState();

  const newsApi = async () => {
    try {

      const news = await axios.get (
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}`
        );
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);

    }catch (error){
      console.log(error);
    }
  };

  console.log(newsArray);

  useEffect(() => {
    newsApi();
  }, [newsResults, category]);

  return (
    <div className="App">
    <Navbar setCategory= {setCategory}/>

    <Content newsArray={newsArray} newsResults={newsResults}/>
    
     
    </div>
    
  );
}

export default App;
