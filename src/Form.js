import { useState } from "react"
import {useNavigate} from "react-router-dom"

export default function Form({blognews}){
    const [formData, setFormData]= useState({
        title:"",
        date:new Date().toLocaleString() + "",
        description:"",
        image: ""
    })
    const navigate = useNavigate()

    function onHandleChange(e){
        const name = e.target.name
        let value = e.target.value

        setFormData({...formData,
        [name]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        blognews(formData)
        navigate('/news')

    }

    return(
        <>
        
        <div className="row">
        <div className="col-md-3"></div>
            <div className="col-md-6">
            <h1>Create Your News</h1>
                <form onSubmit={handleSubmit}>

                    <div>
                    <input onChange={onHandleChange} type="text" name="title" placeholder="Enter Title" value={formData.title} />

                    </div>
                    <br></br>
                    <div>
                    <input onChange={onHandleChange} type="url" name="image" placeholder="Enter Image URL" value={formData.image} />
                    </div>
                    <br></br>

                    <div><textarea onChange={onHandleChange} name="description" placeholder="Enter Description" value={formData.description} ></textarea></div>
                    <br></br>
                    <button type="submit" className="btn-btn-outline-success">submit</button>
                </form>
            </div>
        <div className="col-md-3"></div>
            

        </div>
        </>

    )
}