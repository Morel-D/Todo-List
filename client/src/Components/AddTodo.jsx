import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./useSlice";

const AddTodo = () => {

    const [text, setText] = useState();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        setText('')
        dispatch(addUser({
            id: '4',
            content: text
        }))
    }


    return ( 
        <div className="py-3">
            <form onSubmit={handleSubmit}>
                <label className="">Add a Todo</label>
                <input type="text"
                    value={text}
                    onChange={(e) => {setText(e.target.value)} }
                />
            </form>
        </div>
     );
}
 
export default AddTodo;