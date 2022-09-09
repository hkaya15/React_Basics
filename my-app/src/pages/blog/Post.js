import React,{useState,useEffect} from 'react'
import {useParams, useSearchParams} from  'react-router-dom'

function Post() {
  const {id}= useParams();

 
  const[searchParams, setSearchParams]= useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')


  useEffect(() => {
    searchParams.set('search',search)
    if(!search){
      searchParams.delete('search')
    }
    setSearchParams(Object.fromEntries([...searchParams]))
  }, [search])
  

  return (
    <>
    <input type="text" defaultValue={search} onChange={e=>setSearch(e.target.value)}/>
    <div>post/{id}</div>
    </>
  )
}

export default Post