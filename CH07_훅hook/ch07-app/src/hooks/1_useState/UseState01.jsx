import React, { useState } from 'react'

const UseState01 = () => {
    const [time, setTime] = useState(0); // [state, setState]
    
    const handleClick = () => {

        if (time >= 24) {
            alert("증가못함")
            setTime(0);
        } else {
            setTime(time + 1);
        }
    }


    return (
        // <div className='container mt-5' style={{color:'black', backgroundColor:'lightgray'}}> 
        //     <input />
        // </div>
        <>
            <span>현재 시각: {time}시</span>
            <button className='btn btn-dark' onClick={handleClick}>Update</button>
        </>
    )
}

export default UseState01

// 스타일 넣고 싶으면 div안에 style={{...}} 이거씀