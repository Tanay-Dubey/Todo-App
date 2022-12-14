import React from 'react';

const Note = ({text,onClick}) => {
    return (
        <div style={{ border: "solid", margin: "1rem", height: "10rem", width: "10rem" }} onClick={onClick}>{text}</div>
    );
};

export default Note;