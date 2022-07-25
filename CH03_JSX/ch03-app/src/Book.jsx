import React from "react";

function Book(props){
    let info = {
        color: 'black',
        backgroundColor: 'lightgray',
        display: 'flex',
        border: '1px solid black'
    };
    
    let img = {
        width: '150px',
        // borderRadius: '100px',
        marginRight: '50px'
    };

    let urlImg = "https://image.aladin.co.kr/product/26/0/cover500/s742633278_1.jpg"
    return(
        <div style={info}>
            <img src={urlImg} style={img}/>
            <div>
                <h2>{`이 책의 이름은 ${props.name} 입니다.`}</h2>
                <h3>{`이 책은 총 ${props.page} 페이지 입니다.`}</h3>
            </div>
        </div>
    );
};

export default Book;

{/* <Book name='모두의 SQL' page='100' /> */}