import React from 'react'

export const InputForm = ({placeholder, name, type, className, value}) => {
   return (
      <div className={`log-form__line ${className}`}>
         <input type={type} name={name} placeholder={placeholder} value={value}className="log-form__inp " />
      </div>
   )
}
