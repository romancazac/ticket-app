
import React, { useCallback, useContext, useState } from 'react';
import { AppContext } from '../../App';

const Search = () => {
    const {value, onSearch,updateSearch} = useContext(AppContext);
    // const [value, setValue] = useState('');


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