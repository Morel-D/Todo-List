import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const params = useParams();
    const [text, setText] = useState();
    const newContent = { content: "text" }

    useEffect(() => {
        axios.get(`http://localhost:5000/Todo/${params.id}`)
            .then((response) => {
            return  response.data
            }).then((data) => {
            setText(data.content)
        })
    }, [])


    const handleUpload = (e) => 
    {
        e.preventDefault();
        axios.put(`http://localhost:5000/Todo/${params.id}`, newContent)
            .then((respoonse) => {
            console.log(respoonse)
            })
        
    }
    



    return ( 

        <div className="container center py-5">        
            <form onSubmit={handleUpload}>
              <label>Edit Todo</label>
                <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" className="btn">Upload</button>
            </form>
        </div>

     );
}
 
export default Edit;