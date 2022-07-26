import React from "react";

/*
* 컴포넌트 입력(Props)
: '속성'
읽기 전용

자바스크립트 객체  { }
*/

function App(props){
    return(
        <Profile
        name = 'MINA'
        intro = '안녕'
        hit = {100}> // 숫자는 {}안에 넣어준다.
        </Profile>
    );
}

function Profile(props){
    return(
        <>
        <h2>{props.name}의 블로그 입니다.</h2>
        <p>인삿말: {props.intro}</p>
        <hr/>
        <span>{props.hit}</span>
        </>
    );
}

// 이런식으로 쓸수도 있다.
function Profile({name, intro, hit}){
    return(
        <>
        <h2>{name}의 블로그 입니다.</h2>
        <p>인삿말: {intro}</p>
        <hr/>
        <span>{hit}</span>
        </>
    );
} 