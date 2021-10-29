import React from 'react';

const SearchList = ({newsArray=[]}) => {
  return (
    <>
    { newsArray.map((newsItem) => {
        if (newsItem) {
          return (
            <div key={newsItem.title}>
              <h1>{newsItem.title}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchList