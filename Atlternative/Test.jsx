import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Test = () => {
    
    useEffect(() => {

      const getData = async () => 
      {
        await axios.get('http://localhost:5000/Todo')
        .then((response) => {
            console.log(response);
    })

        }
        
        getData();
    }, [])

    return ( 
        <div className="container center py-5">
            <div className="card p-3 col-6">
                This is a task
            </div>
        </div>
     );
}
 
export default Test;