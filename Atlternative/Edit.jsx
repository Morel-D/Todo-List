import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./useSlice";

const Edit = () => {


    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const todos = useSelector(Store => Store.users);
    const existingUser = todos.filter(todo => todo.id == params.id);
    const { content } = existingUser[0];
    const [values, setValue] = useState({
        content: content
    })


    const handleEdit = (e) => 
    {
        e.preventDefault();
        setValue({ content: '' });
        dispatch(editUser({
            id: params.id,
            content: values
        }));
        navigate('/');

        console.log(values);
        }
    
    return ( 

        <div className="container center py-5">        
            <form onSubmit={handleEdit}>
              <label>Edit Todo</label>
                <input type="text" value={values.content} onChange={(e) => { setValue(e.target.value) }} />
                <button type="submit" className="btn">Upload</button>
            </form>
        </div>

     );
}
 
export default Edit;