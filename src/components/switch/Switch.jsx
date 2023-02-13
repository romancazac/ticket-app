import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Switch = () => {
    const {onSwitch} = useContext(AppContext)

    return (
        <div className="aside__switch aside-switch">
            <span className="aside-switch_d">Dark</span>
            <div className="aside-switch__wrapp">
                <input type="checkbox"  id="switch"
                onClick={onSwitch}
                />
                <label htmlFor="switch">
                    <div className="switch">
                        <div className="bar"></div>
                    </div>
                </label>
            </div>
            <span className="aside-switch_l">Light</span>
        </div>
    );
};

export default Switch;