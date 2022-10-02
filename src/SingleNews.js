import { useEffect,useState } from "react"
import {useParams} from 'react-router-dom'
export default function SingleNews(){
    const [single, setSingle] = useState({})
    const {id}=useParams()
    console.log(id)

    useEffect(()=>{
        fetch(`http://localhost:3000/news/${id}`)
        .then((response)=> response.json())
        .then((data)=>setSingle(data))
        
    
      },[id])
    return(
    <>
    
    <div
    class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
    style={{backgroundImage: `url(${single.image})`, width:'100%', height:'500px'}}
    >
    <h1 className="mb-3 h2">{single.title}</h1>

    <p>
        {single.description}
    </p>
    </div>

        </>
    )
}