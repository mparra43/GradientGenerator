import React from 'react';



export const Color = (props) => {

    return (
        <button
            style={{
                width: '75px',
                height: '28px',
                'borderColor': 'transparent',
                'borderRadius': "4px",
                background: props.text,
            }}>
        </button>
    );
};