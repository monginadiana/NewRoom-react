import {Link} from 'react-router-dom'
export default function News({id, title, date, description, image}){
    return(
    <>
    
    <div class="news-card">
        
        <img src={image} alt="" class="news-card__image"/>
        <div class="news-card__text-wrapper">
        <h2 class="news-card__title">{title}</h2>
        <div class="news-card__post-date">{date}</div>
        <div class="news-card__details-wrapper">
            <p class="news-card__excerpt">{description}</p>
            <Link to={"/news/"+id} class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></Link>
        </div>
        </div>
    </div>

    
 
    

    
  
    </>
    )
}