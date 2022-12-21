import React, { Components } from "react";
import Rainbow from '../hoc/multiColor'

const About = (props) => {

    console.log(props)
    return ( 
        <div className="center py-5">
            This is the about page
        </div>
     );
}
 
export default Rainbow(About);