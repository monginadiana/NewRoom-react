import News from "./News"

export default function NewsList({news}){
    
    return(
        <>
    <div class="content-wrapper">

        {
            news.map(item=>{
                return <News key={item.id} id={item.id} title={item.title}
                date={item.date} description={item.description} image={item.image}/>
            })
        }
    </div>
    </>

    )
}