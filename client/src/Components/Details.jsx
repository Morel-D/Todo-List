import React, { Component } from "react";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Details = () => {

    const [name, setName] = useState();
   
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
            // console.log(res.data)
            return res.data;
        }).then((data) => {
            setName(data.slice(0,10))
        })
      }, [] )

    
    
   
    

    return ( 
        <div className="container center py-5">
           
            {!name && <div>No post bro</div>}
            
                {name && name.map((data) => (
                    <div className="card p-5" key={data.id}>
                        <Link to={'/'+ data.id}>
                          {data.title}
                        </Link>
                    </div>
                ))   }
            
        </div>
     );
}
 
export default Details;