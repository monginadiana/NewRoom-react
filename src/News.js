import {Link} from 'react-router-dom'
export default function News({id, title, date, description, image}){
    return(
    <>
    
    <div className="news-card">
        
        <img src={image} alt="" className="news-card__image"/>
        <div className="news-card__text-wrapper">
        <h2 className="news-card__title">{title}</h2>
        <div className="news-card__post-date">{date}</div>
        <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">{description}</p>
            <Link to={"/news/"+id} className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
        </div>
    </div>

    
 
    

    
  
    </>
    )
}