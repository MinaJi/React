import React from 'react'

const styles = {
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
};

function Avatar(props) {
    console.log(props.url);
  return (
    <>
    <img src={props.url} alt='avatar-image' style={styles.avatar} />
    </>
  )
}

export default Avatar