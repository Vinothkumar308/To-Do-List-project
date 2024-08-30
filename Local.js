import React from 'react'

const Local = ({totolist,HandleDelete,HandleUpdate}) => {

  return (
    <div className='flex'>
       {totolist.map((list,index)=>(
        <div key={list.id}>
            <label className={(list.checked)?"line":""} onClick={()=>{HandleUpdate(list.id)}}>{`${index+1}. ${list.item}`}</label>
            <button onClick={()=>{HandleDelete(list.id)}}>X</button>
         </div>
     ))}
    </div>
  )
}

export default Local;
