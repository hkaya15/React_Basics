import React, { useCallback, useMemo, useReducer } from 'react'
import Header from '../Header/Header';


// useReducer usage
function reducer(state, action){
    switch (action.type) {
        case 'SET_TODO':
            return {
                ...state,
                todo: action.value
            }
        case 'ADD_TODO':
            return {
                ...state,
                todo: '',
                todos: [
                    ...state.todos,
                    action.todo,
                ]
            }
        case 'SEARCH_TODO':
            return {
                ...state,
               search: action.search,
            }
        default:
            return state;
    }
}

function Todo() {


    console.log("Todo rendered")

    const [state, dispatch] = useReducer(reducer,{
        todos: [],
        todo: '',
        search: ''
    });

    // useCallback usage => That helps to return the memoized function
    const submitHandle = useCallback(e=>{
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            todo: state.todo
        })
    },[state.todo]);

    const onChange = e =>{
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        })
    }

    const onSearch = e =>{
        dispatch({
            type: 'SEARCH_TODO',
            search: e.target.value
        })
    }

    // useMemo usage => That helps to return the memoized value
    const filteredTodos = useMemo(() =>{
       return state.todos.filter(todo=>todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
    }, [state.todos,state.search])
   
   
    return (
        <>
        {/* Header used with memo that helps to return the memoized component */}
        <Header/>
        <input placeholder="Search" type="text" value={state.search} onChange={onSearch}/>
        <form onSubmit={submitHandle}>
            <input type="text" value={state.todo} onChange={onChange}/>
            <button disabled={!state.todo} type='submit'>Ekle</button>
        </form>
        <ul style={{listStyleType: "none"}}>
            { filteredTodos.length > 0 ? filteredTodos.map((todo,index)=>(
                <li key={index}>{todo}</li>
            )) : <p>Sonuç Bulunamadı</p>}
        </ul>
        </>
    )
}

export default Todo