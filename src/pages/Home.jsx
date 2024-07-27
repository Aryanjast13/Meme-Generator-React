import React,{useEffect, useState} from 'react'

import MemeCard from '../components/MemeCard'
import GetAllMemes from '../api/memes'

const Home = () => {
  const [data,setData] =useState([])

  useEffect(() => {
    GetAllMemes().then(memes => setData(memes.data.memes));
  }, [])
  
  return (
    <div className='row'>
      {data.map((el,i) => (
        <MemeCard Img={el.url} key={i} title={el.name} />
      ))}
    </div>
  );
}

export default Home