import React from 'react'
import {  Outlet } from 'react-router-dom';


const SignIn = () => {

	return (
			<div className="page-home__container">
				<div className="page-home__row">
					<div className="page-home__column">
						<h1 className="page-home__title">Welcome back!</h1>
						<h2 className="page-home__subtitle">Let’s get started!</h2>
					</div>
					<div className="page-home__column">
						<Outlet/>
					</div>
				</div>
			</div>
		
  )
}

export default SignIn