import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {

    const {isDark, setIsDark} = useContext(ThemeContext);

    const setDark = ()=> {
        return {...styles.footer, backgroundColor:'#2E4053', color:'#fff'}
    }

    const toggle = ()=>{
        setIsDark(!isDark);
        document.querySelector('.btn').innerHTML = isDark ? 'Dark' : 'Light';
    }

    const styles = {
        footer:{
          backgroundColor:'#CE93D8',
          height:100,
          display:'flex',
          // flexDirection:'row',
          alignItems:'center',
          justifyContent: 'center',  
          color:'#111',  
       
        },
       
        contain:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          // justifyContent: 'center',    
        }
      };
      

  return (
    <>
    <footer style={isDark ? setDark() : styles.footer}>
        <div className='contain' style={styles.contain}>
            Currently v5.2.1 Code licensed Mina Ji, docs CC BY 3.0.
            <button className='btn btn-dark ml-5'
            onClick={toggle}>
                Dark
            </button>
        </div>
    </footer>
    </>
  )
}

export default Footer