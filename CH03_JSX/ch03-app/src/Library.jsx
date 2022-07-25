import React from "react";
import Book from "./Book";
function Library(props) {
    return(
        <div>
        <Book name="파이썬이 젤 쉬웠어요" page="100"/>
        <Book name="니체의 말" page="200"/>
        <Book name="자바가 머임?ㅋ" page="300"/>   
        </div>
    );
}

export default Library;