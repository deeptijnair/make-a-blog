import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController(); // Create an abort controller to cancel the fetch request if needed
        

         fetch(url)
             .then(res => {
                 if(!res.ok){
                     throw Error('Could not fetch the data for that resource');
                 }
                 return res.json();
             })
             .then(data => {
                 setData(data.blogs); // Assuming the response is an object with a 'blogs' property
                 setError(null);
                 setIsLoading(false);
             })
             .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    setError(err.message);
                    setIsLoading(false);
                }
             })

        return () => abortCont.abort(); // Cleanup function to abort the fetch request if the component unmounts or the URL changes
     }, [url]); // Dependency array to re-run the effect when the URL changes

     return { data, isLoading, error};
}

export default useFetch;