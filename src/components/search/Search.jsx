
import React, { useCallback, useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';

const Search = () => {
    const {value, onSearch} = useContext(AppContext);



    return (
        <div className="dashboard-content__line log-form__line log-form__line_search">
            <input type="search" 
            name="search" 
            placeholder="Search" 
            className="log-form__inp "
            value={value}
            onChange={(e) => onSearch(e.target.value) }
            />
         </div>
    );
};

export default Search;