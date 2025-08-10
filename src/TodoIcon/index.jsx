import React from 'react';
import { BsCheck } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <BsCheck className="Icon-svg" fill={color} />,
    "delete": (color) => <BsX className="Icon-svg" fill={color}/>
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };