import { createSlice } from '@reduxjs/toolkit';
​
const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 100 },
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        plus(state, action) {
            console.log(action);
            const { ten, minus } = action.payload;
            state.counter = state.counter + ten + minus;
        },
    },
});
​
export const counterAction = counterSlice.actions;
​
export default counterSlice.reducer;