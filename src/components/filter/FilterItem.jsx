import React from 'react';

const FilterItem = ({name, children, onClick, className}) => {

    return (
        <>
            <li className="dropdown__parent">
                <button className={className}
                onClick={onClick}
                >{name}</button>
                {children}
            </li>

        </>
    );
};

export default FilterItem;