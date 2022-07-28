import React from 'react'
import { useState } from 'react'

function UseState03() {

    const styles = {
        button: {
            height:80,
            width:80,
            padding:10
        },
        
        icon: {
            fontSize:25,
        }
    }

    const [count, setCount] = useState (0);

    const clickHandler = ()=>{
        setCount(count + 1);
        if(count==100) {
            alert("100돌파!!")
        }
    }


  return (
    <>
    <div className='container'>
        <p>You Clicked {count} Times</p>
    </div>
    
    <button className='btn btn-warning' onClick={clickHandler} style={styles.button}>
        <i class="fa-solid fa-computer-mouse" style={styles.icon}></i>
        <br />
        Click!
    </button>
    </>

  )
}

export default UseState03