import News from "./News"


export default function NewsList({news, search}){
    const filterSearch = news.filter(item=>{
        if (!search) return true
        return item.title.toLowerCase().includes(search.toLowerCase())
    })
    
    return(
        <>
        
    <div className="content-wrapper">

        {
            filterSearch.map(item=>{
                return <News key={item.id} id={item.id} title={item.title}
                date={item.date} description={item.description} image={item.image}/>
            })
        }
    </div>
    </>

    )
}