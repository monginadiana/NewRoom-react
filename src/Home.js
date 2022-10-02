import img from './assets/image1.jpg'
import {Link} from "react-router-dom"
export default function Home(){
    return(
    <>
    
    <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{backgroundImage: `url(${img})`}}
    >
        <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
            <h1 className="mb-3">DEE News</h1>
            <h5 className="mb-4">Get News Updates</h5>
            <Link className="btn btn-outline-light btn-lg m-2" to="/news"
            >News</Link>
            <Link className="btn btn-outline-light btn-lg m-2"
                to="/news/new"
                
            >Add News</Link>
            </div>
        </div>
        </div>
    </div>
   
</>
)}