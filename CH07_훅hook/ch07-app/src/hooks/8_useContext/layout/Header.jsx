import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './layout.css'

import {NavLink} from 'react-router-dom'

function Header() {

    const styles = {
        header:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          padding:10,
          color:'#111',
          backgroundColor:'#CE93D8',
          justifyContent: 'center',
        },
        h4:{
          marginLeft:10,
        },
        avatar:{
          width:100,
          height:100,
          borderRadius:50,
        },
       
        ul:{
          width:400,
          listStyle:'none',
          display:'flex',
          justifyContent:'space-between',
          cursor:'pointer',
        },
      };

      const {isDark} = useContext(ThemeContext);

      const setDark = ()=> {
          return {...styles.header, backgroundColor:'#2E4053', color:'#fff'}
      }

  return (
    <>
        <header style={isDark ? setDark() : styles.header}>
            <img src='/images/최고농담곰-따봉농담곰.gif' alt='' style={styles.avatar}/>
            <h4 style={styles.h4}>
                Mina's HomePage
                <i className="fa-solid fa-house-user"></i>
            </h4>
            
            <nav className='ml-5'>
                    <NavLink to={"/"}>HOME</NavLink>
                    <NavLink to={"js"}>JavaScript</NavLink>
                    <NavLink to={"react"}>React</NavLink>
                    <NavLink to={"java"}>JAVA</NavLink>
                    <NavLink to={"sb"}>Springboot</NavLink>
            </nav>
        </header>
    </>
  )
}

export default Header