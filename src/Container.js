import { useState } from 'react'
import NewsList from './NewsList'
import Search from './Search'
export default  function Container({news}){
    const[search, setSearch]= useState('')
    function valSearch(value){
        setSearch(value)
        console.log(value)
      }
    return(
        <>
        <div className="row">
        <div className="col-md-4"></div>
            <div className="col-md-4"><Search search={search} valu1={valSearch}/></div>
            <div className="col-md-4"></div>
            </div>

        
        <NewsList news={news} search={search} />
        </>
    )
}