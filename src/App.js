import React, { useState } from 'react';   
function App(){
    const [value,setValue]= useState("")
    const [results,setResults]=useState([])
    const fetchData= ()=>{
        fetch(`https://api.unsplash.com/search/photos?client_id=WC3CRoWXqbfa5zDvULC77phP29SGs44lEzkKL6DnZe8&query=${value}&orientation=squarish`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
            setResults(data.results)
        })
   
    }

    return(
<div>
<h1>Image Gallery</h1>
        <div className="continer">
            <div className='app'>
                <input type="text" value={value} placeholder="Search Image" onChange={(e)=>setValue(e.target.value)}></input>
                <button id="btn" onClick={()=>fetchData()}>Search</button>
            </div>
        </div>
        <div className='grid'>
                {
                    results.map((item)=>{
                        return <img className='item' key={item.id} src={item.urls.regular}/>

                    })
                }
            </div>

        </div>
        
    );
    }
export default App
