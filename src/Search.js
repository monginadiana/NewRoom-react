

export default function Search({search,valu1}){
    return(
        <>
        <br></br>
        <input style={{width:'100%'}} type="search" value={search} placeholder="search" 
        onChange={(e)=>valu1(e.target.value)}/>
        </> 
    )
    
}