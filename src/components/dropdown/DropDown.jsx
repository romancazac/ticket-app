import React, { useState } from 'react';

const DropDown = ({title, dropItems, className, dropIcon, children}) => {
    const [drop, setDrop] = useState(false);

    const onDrop = () => {
        setDrop(!drop)
    }
    return (
        <div className={`${className} dropdown`} >
        <span 
        className={drop ? "dropdown__name  _active-drop" : "dropdown__name"}
        onClick={onDrop}
        >
            {title}         
            <span className="dropdown__icon">
                {dropIcon}
            </span>

        </span>
        {
            children
        }

    </div>
    );
};

export default DropDown;