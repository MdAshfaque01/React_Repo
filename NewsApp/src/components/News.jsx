import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import { useRef } from 'react';

const News = () => {

    
    const [newsList,setNewsList] = useState([]);
    const [query,setQuery] = useState("tesla");

    const queryInputRef = useRef(null);


    const key = "73bbb6ed3d0d4ed595f5bdea084dcae2"
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-07-12&sortBy=publishedAt&apiKey=${key}`


    useEffect(() => {
        fetchData();
    },[query])

    async function fetchData() {
        const response = await fetch(apiUrl);
        // console.log(response);
        const jsonData = await response.json();
        // console.log(jsonData);
        // console.log(jsonData.articles);
        setNewsList(jsonData.articles);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const refQuery = queryInputRef.current.value;

        setQuery(refQuery);
    }


  return (
    <>
        <div className='max-w-5xl mx-auto items-center py-10'>
            <div className='flex flex-col justify-center items-center flex-wrap space-y-5'>
                <div>
                    <h1 className='text-5xl font-bold font-serif text-slate-900'>NewsApp</h1>
                </div>
            <div className='py-10 px-10'>
                <form onSubmit={handleSubmit} className='space-x-4'>
                    <input type="text" ref={queryInputRef}  className='px-6 py-2.5 outline-none border-2 border-black rounded-md'/>
                    <button type='submit' className='bg-blue-400 px-4 py-2.5 rounded-md'>Search</button>
                </form>
            </div>
            <div className='grid grid-cols-3 gap-6 '>
            {
                newsList.map((news,idx) => {
                    return  <NewsCard news={news} key={idx}/>
                })
            }
            </div>
        </div>   
        </div>    
    </>
  )
}

export default News