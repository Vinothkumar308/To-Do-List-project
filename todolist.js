import { useEffect, useRef, useState } from 'react';
import './App.css';
import Local from './Local.js';


function App() {
  
  let local_s = localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[]
  const [totolist,setTodolist] = useState(local_s) 
  const inputRef = useRef(null)
  
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(totolist))
  },[totolist])
 
  const HandleCreate = ()=>{
     const textvalue = inputRef.current.value
     const items = {"id":Date.now(),"checked":false,"item":textvalue}
     setTodolist([...totolist,items])
     inputRef.current.value = " "
    }

  const HandleDelete = (id)=>{
    const filter = totolist.filter((list)=>(list.id!==id))
    setTodolist(filter)
  }
  const HandleUpdate = (id)=>{
    const filter = totolist.map((list)=>{
      if(list.id===id){
        return {...list,checked:!list.checked}
      }
      else{
        return list
      }
    })
    setTodolist(filter)
   
  }

  return (
    <div className='container'>
       <div className='con1'>
          <h3 className='heading'>To-Do-List</h3>
             <div className='list-container'>
               <input type="text" ref={inputRef} />
               <button onClick={HandleCreate}>Add Task</button>
              </div>
       </div>
        <div className="con2">
            <h4 className='list-heading'>Fill task details</h4>
            <div className='fle'>
                <h4 className='head'>list of tasks</h4>
                 <Local 
                    totolist={totolist} 
                    setTodolist={setTodolist}
                    HandleDelete={HandleDelete}
                    HandleUpdate={HandleUpdate}
                />
            </div>
         </div>
      </div>
)}

export default App;
