import React from 'react'
import { useContext } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Java from '../pages/Java';
import JavaScript from '../pages/JavaScript';
import Main from '../pages/Main';
import Reacts from '../pages/Reacts';
import Springboot from '../pages/Springboot';
import Slider from '../ui/Slider';

function Content() {

    const styles = {
        h5: {
            marginTop: 100
        },

        main: {
            height: 750,
            color: 'gray',
            backgroundColor: '#F3E5F5',
        }
    };

    const {isDark} = useContext(ThemeContext);

    const setDark = ()=> {
        return {...styles.main, backgroundColor:'#1B2631', color:'#fff'}
    }

  return (
    <main style={isDark ? setDark() : styles.main}>
        <div className='container text-center'>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='js' element={<JavaScript />}/>
                <Route path='java' element={<Java />}/>
                <Route path='react' element={<Reacts />}/>
                <Route path='sb' element={<Springboot />}/>
            </Routes>
        </div>
    </main>
  )
}

export default Content