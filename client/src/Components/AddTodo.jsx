import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {

    const [text, setText] = useState();
    const navigate = useNavigate();

    const list = { content: text }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/Todo', list);
        
        window.location.reload(true);
    }  
    


    return ( 
        <div className="py-3">
            <form onSubmit={handleSubmit} method="post">
                <label className="">Add a Todo</label>
                <input type="text"
                    value={text}
                    onChange ={(e) => { setText(e.target.value)}}
                />
                <button type="sumbit" className="btn">Add Todo</button>
            </form>
        </div>
     );
}
 
export default AddTodo;