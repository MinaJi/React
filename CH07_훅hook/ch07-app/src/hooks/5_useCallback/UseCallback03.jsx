import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Box from './Box'

function UseCallback03() {
    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);

    // const createBoxStyle = ()=>{
    //     return {
    //         backgroundColor: 'pink',
    //         width: `${size}px`,
    //         height: `${size}px`
    //     }
    // }

    const createBoxStyle2 = useCallback(()=>{
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`
        }
    }, [size]);

  return (
    <div className='container' style={{background: isDark ? '#000' : '#FFF'}}>
        <button className='btn btn-dark mb-2'
        onClick={()=>{setIsDark(!isDark)}}>Change Theme</button>
        <input className='form-control' type={'number'} 
        value={size} onChange={(e)=>setSize(e.target.value)}
        />
        <br />

        <Box createBoxStyle={createBoxStyle2} />
    </div>
  )
}

export default UseCallback03