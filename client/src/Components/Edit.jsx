import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {

    const [items, setItems] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then((res) => {
            return res.data
            }).then((data) => {
            setItems(data)
                // console.log(data.body)
        })
    })

    
    return ( 

        <div className="container">        
            {items && (
                <div className="center py-5">
                <h2>{items.title}</h2>
                <p>{items.body}</p>
                </div>
            )}
        </div>

     );
}
 
export default Edit;