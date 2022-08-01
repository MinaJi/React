import React, { useReducer } from 'react'

function Student({id,name,isHere,dispatch}) {

  return (
    <div>
      <span style={
        {
          textDecoration: isHere ? '':'line-through',
          color: isHere ? 'white':'red',
          cursor:'pointer',
        }
      }
      onClick={()=>{
        dispatch({type:'check-stu',payload:{id}})
      }}
      >{`${name}(${id})`}</span>
      <button 
        className='btn btn-outline-danger ml-3'
        onClick={()=>{

          // dispatch 를 호출해서 삭제 기능 수행
          dispatch({type:'delete-student',payload:{id}})
        }}
        >삭제
      </button>
    </div>
  )
}

export default Student