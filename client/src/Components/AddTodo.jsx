import { useState } from "react";

const AddTodo = () => {

    const [text, setText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)
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