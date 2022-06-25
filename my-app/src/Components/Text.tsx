import React from 'react';

type TextProps = {
    children: string;
    time: number;
}

function Text({children, time}: TextProps){
    return(
        <p className='typing-txt'>{children}</p>
    )
}

export default Text;