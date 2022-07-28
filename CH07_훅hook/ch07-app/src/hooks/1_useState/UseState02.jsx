import React from 'react'
import { useState } from 'react'

function UseState02() {

    const [input, setInput] = useState('');
    const [names, setNames] = useState([]);

    const inputChangeHandler = (e)=>{
        setInput(e.target.value);
        //console.log(input);
    }

    const uploadHandler = ()=>{
        setNames((preState)=>{
            console.log(preState)
            return [...preState, input + '\n']
        });
    }


  return (
    <div className='container'>
        <div style={{display:'flex'}}>
            <input type={'text'} className='form-control' placeholder='이름을 입력해주세요.' style={{width:'300px'}}
            onChange={inputChangeHandler}
            /> 
            <button className='btn btn-danger ms-1' onClick={uploadHandler}>upload</button>
        </div>
        <textarea className='form-control mt-2' 
        defaultValue={names.toString().split(',').join('')}
        rows={10}/>
    </div>
  )
}

export default UseState02