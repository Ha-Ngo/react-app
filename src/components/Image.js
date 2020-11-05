import React from 'react';

export default function Image(props) {
    console.log(props)
    return (
        <div>
            {props.image[0]}
        </div>
    )
}
