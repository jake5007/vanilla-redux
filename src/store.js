import { configureStore, createSlice } from '@reduxjs/toolkit';

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

/* 
    if we use createReducer of redux toolkit, it is okay to mutate the state. 
    so we have two options. mutating the state or returning a new state.
*/
// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() })
//     },
//     [deleteToDo]: (state, action) => 
//         state.filter(toDo => toDo.id !== +action.payload)
// })

// const reducer = (state = [], action) => {
//     switch(action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== +action.payload);
//         default:
//             return state;
//     }
// }

/* internally, it uses createAction and createReducer */
const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() })
        },
        remove: (state, action) => 
            state.filter(toDo => toDo.id !== +action.payload)
    }
})

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
