import { useRef } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const name = useRef();
  const todos = useSelector(state => state.todo.todo);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

     if (name.current.value) {
       let t = {
         id: Date.now(),
         name: name.current.value
       }
       dispatch({type:"TODO_ADD", payload: t})
       name.current.value = ''
     } else {
        alert("Enter task")
     }
    
  }

  function handleDel(el) {
    dispatch({type: "TODO_REMOVE", payload: el})
  }

  console.log(todos);


  return (
    <>
      <div className="todoWrap" style={{width:'800px', marginLeft: 'auto', marginRight: 'auto'}}>
        <form className="form" style={{display:'flex', marginTop:'30px', marginBottom: '20px', gap:'10px'}}>
        <div className="form-floating w-75">
          <input ref={name} type="text" className="form-control" id="floatingPassword" placeholder="Name"/>
          <label htmlFor="floatingPassword">Name</label>
        </div>
        <button onClick={handleClick} className='btn btn-success w-25'>ADD</button>
        </form>
        <ul>
         {
          todos.length > 0 && 
          todos.map((el, index) => {
            return (
              <li key={index} style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                <span>{el.name}</span>
                <div className="actions">
                  <button onClick={() => {handleDel(el)}} className='btn btn-danger'>del</button>
                </div>
              </li>
            )
          })
         }         
        </ul>
      </div>
    </>
  )
}

export default App
