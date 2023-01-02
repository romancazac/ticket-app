import React, { useState } from 'react';

const FilterItem = ({name, children}) => {
    const[active, setActive] = useState(0)
    const onFilter = (name) => {
      
        setActive()
    }
    return (
        <>
            <li className="dropdown__parent">
                <button className="dropdown__item "
                onClick={() => onFilter(name)}
                >{name}</button>
                {children}
            </li>

        </>
    );
};

export default FilterItem;