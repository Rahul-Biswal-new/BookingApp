import {useState, useEffect} from 'react'
import axios, { Axios } from 'axios'
const  useFetch = (url) =>  {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true);

            try{
                const res = await axios.get(url)
                setData(res.data)
                console.log(res.data,  "## fetchDATA");
            }catch(err){
                setError(err)
            }
            setLoading(false)
        };
    fetchData()
    }, [url])
    
    const reFetch = async ()=>{
        setLoading(true);

        try{
        const res = await axios.get(url)
        setData(res.data)
    }catch(err){
        setError(err)
    }
    setLoading(false)
    };

    // reFetch();
    return {data, loading , error}
    }

export default useFetch;