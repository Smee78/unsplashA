import axios from "axois"
import { useEffect, useState } from "react";

let useAxois = (param) => {
    const [response,setResponse] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState('');

    axois.defaults.baseURL='https://api.unsplash.com';

    const fatchData= async (url) => {
        try{
            setIsLoading(true);
            let res= await axois(url);
            setResponse(res.data.results);

        }catch(err){
            setError(err)

        }finally{
            setIsLoading(false)

        }
        
    }

    useEffect(()=>{
        fatchData(param);

    },[param])



    return(
        response,
        isLoading,
        error,
       fatchData : url => fatchData(url)
    )
}
export default useAxois