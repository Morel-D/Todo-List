import React, { Component } from "react";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";


const Details = () => {

    const [name, setName] = useState();

   
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.data;
        }).then((data) => {
            setName(data.slice(0,10))
        })
      }, [] )

    
    
   
    

    return ( 
        <div className="container center py-5">
           
                {name && name.map((data) => (
                    <div className="card p-5" key={data.id}>
                        {data.title}
                    </div>
                ))   }
            
        </div>
     );
}
 
export default Details;