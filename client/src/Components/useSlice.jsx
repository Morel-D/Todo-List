import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, content: "Buy some toasts for the breakfast" },
    { id: 2, content: "Play video games all day" },
    { id: 3, content: "Go to the gym" },
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },

        editUser: (state, action) => {
            const { id, content } = action.payload;
            const existingUser = state.find(user => user.id == id);
            if (existingUser)
            {
                existingUser.content = content;
            }
            
        }
    }
});

export const { addUser, editUser } = userSlice.actions;
export default userSlice.reducer;

