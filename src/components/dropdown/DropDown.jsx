import React, { useEffect, useRef, useState } from 'react';

export default React.memo(({ title, dropItems, className, dropIcon, children }) => {
    const [drop, setDrop] = useState(false);

    const modalRef = useRef();

    const onDrop = () => {
        setDrop(!drop)
    }

    useEffect(() => {
        const closeModal = (e) => {
            if (!e.path.includes(modalRef.current)) {
                setDrop(false);
            }

        }
        document.body.addEventListener('click', closeModal);
        return () => {
            document.body.removeEventListener('click', closeModal)
        }
    }, [title]);
    useEffect(() => {
        setDrop(false);
    },[title])
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
});

