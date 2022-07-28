import React, { useEffect } from 'react'
import { useState } from 'react'

function UseEffect02() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Nickname');

    const updateInput = (e)=>{
        setName(e.target.value);
    }

    const updateCount = ()=>{
        setCount(count + 1);
    }

    // 렌더링마다 매번 사이드 이펙트 실행
    // useEffect(()=>{
    //     console.log('매번 컴포넌트 렌더링 🍙')
    // });

    // 마운팅 && count가 바뀔때마다 실행
    // useEffect(()=>{
    //     console.log('count가 변경될 때 🍕')
    // },[count]);

    // 마운팅 && name
    // useEffect(()=>{
    //     console.log('name이 변경될 때 🥞')
    // }, [name]);

    // 최초 마운팅 될때만...
    // useEffect(()=>{
    //     console.log('최초 마운팅 될때만 🍪')
    // },[]);

  return (
    <div className='container'>
        <p>COUNT : {count}</p>
        <button className='btn btn-secondary'
        onClick={updateCount}>Update</button>
        <br />
        <div>
            <input type='text' onChange={updateInput} />
        </div>
        <p>{name}</p>
    </div>
  )
}

export default UseEffect02