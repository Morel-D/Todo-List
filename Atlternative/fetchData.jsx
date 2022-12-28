import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"


const fetchData = (url) => {

    // const [texts, setText] = useState(null);

    // useEffect(() => {

    //     axios.get(url)
    //         .then((response) => {
            
    //             if (!response.ok) {
    //                 throw Error('Something is wrong')
    //             }
    //             return response.data
    //         }).then((data) => {
    //             setText(data);
    //         })

    // }, [url]);

    // return { texts }
}

export default fetchData;