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
        }
    }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

