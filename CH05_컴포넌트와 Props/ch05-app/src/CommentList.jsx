import React from 'react'
import Comment from './Comment'

const list = [{
    name:'Mina',
    comment:'안녕하세요ㅋㅋ',
    avatarUrl:'images/IMG_EAB10F6BFFCC-1 복사본.jpeg'
},
{
    name:'Apple',
    comment:'안녕하세욘ㅋㅋ',
    avatarUrl:'images/그로구250px.png'
},
{
    name:'Castle',
    comment:'안녕하세연ㅎㅎ',
    avatarUrl:'images/남궁성님1.png'
},
{
    name:'Silver',
    comment:'안녕하세윤ㅋㅎ',
    avatarUrl:'images/변화표현ㅇdㅇ.png'
}];

function CommentList() {
  return (
    <>
    {
        list.map((data, idx)=>{
            return(
                <Comment name={data.name} comment={data.comment} avatarUrl={data.avatarUrl} />
            )
        })
    }
    </>
  )
}

export default CommentList