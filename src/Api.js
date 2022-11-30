import React,{useEffect} from 'react'
import { useGlobalContext } from './Context'

const Api = () => {
    const {hits,isLoading} = useGlobalContext();
   
   
   
    if(isLoading){
        return <>
        <h1>Loading....</h1>
        </>
    }
  return (
    <div>
        <div className="stories-div">
        {hits.map((curPost)=>{
          const {title,author,objectId,url,num_comments} = curPost;
          return (
            <>
            <div className="card"key={objectId}>
            <h2>{title}</h2>
            <p>
             By <span>{author}</span> | <span>{num_comments}</span> comments
            </p>
            <div className="card-button">
              <a href={url} target="_blank">
                Read More
              </a>
              <a href="#">Remove</a>
            </div>



            </div>
            </>
          ) 
        
        }
        )}
        </div>
    </div>
  )
}

export default Api