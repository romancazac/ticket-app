import React, { useEffect,  useRef, useState } from 'react';

 const DropDown = ({ title, className, dropIcon, children }) => {
    
    const modalRef = useRef();
    const [drop, setDrop] = useState(false);

    

    const onDrop = () => {
        setDrop(!drop)
    }


    useEffect(() => {
        setDrop(false);
    },[title])
   
    useEffect(() => {
        const closeModal = (e) => {
            if (!e.composedPath().includes(modalRef.current)) {
                setDrop(false);
             }
         
        }
        document.body.addEventListener('click', closeModal);
        return () => {
            document.body.removeEventListener('click', closeModal)
        }
    }, []);
    return (
        <div ref={modalRef} className={`${className} dropdown`} >
            <span
                className={drop ? "dropdown__name  _active-drop" : "dropdown__name"}
                onClick={onDrop}
            >
                <div className="dropdown__names">
                    {title}
                </div>

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

export default  DropDown 