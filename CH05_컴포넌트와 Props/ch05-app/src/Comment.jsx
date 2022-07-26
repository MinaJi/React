import React from 'react'
import Avatar from './Avatar'
import Dtime from './Dtime'

function Comment(props) {
    return (
    <>
        <div class="comment">
        <div class="user-info container">
            <Avatar url={props.avatarUrl} />
            <div class="user-info-name container">
                {props.name}
            </div>

        </div>
        <div class="comment-txt container">
            <p>
                {props.comment}
            </p>
            <div class="comment-date">
                <Dtime />
            </div>
        </div>
    </div>
    </>
    )
}

export default Comment