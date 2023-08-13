import React from 'react'

function NewsCard({news}) {

   

  return (
    <>

<div className='flex flex-col max-w-xs border-2 px-3 border-black shadow-xl rounded-lg bg-yellow-50 space-y-4'>
        <img src={news.urlToImage} alt={news.title} />
        <h2 className='text-xl font-extrabold'>{news.title}</h2>
        <p>{news.description}</p>
        <button onClick={() => window.open(news.url)} className='bg-blue-400 px-3 py-2.5 rounded-md'>Read More</button>
      </div>

    </>
  )
}

export default NewsCard