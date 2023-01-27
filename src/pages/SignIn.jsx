import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom';


const SignIn = ({user, children}) => {

	return (
			<div className="page-home__container">
				<div className="page-home__row">
					<div className="page-home__column">
						<h1 className="page-home__title">Welcome back!</h1>
						<h2 className="page-home__subtitle">Let’s get started!</h2>
					</div>
					<div className="page-home__column">
						<Outlet/>
						
						{/* <form action="#" className="page-home__form log-form">
							<h3 className="log-form__title">
								Sign in
							</h3>
							<div className="log-form__line log-form__line_user">
								<input type="text" name="login" placeholder="Login" className="log-form__inp "/>
							</div>
							<div className="log-form__line log-form__line_pass">
								<input type="password" name="password" placeholder="Password" className="log-form__inp "/>
								<button className="log-form__show _hidden"></button> */}
								{/* <!-- remove className hidden  --> */}
							{/* </div>
							<button type="submit" className="log-form__btn"
							onClick={handleLog}
							>Login</button>
							<div className="log-form__footer">
								<div className="checkbox">
									<input id="formLog" type="checkbox" name="remember" className="checkbox__input _req"/>
									<label htmlFor="formLog" className="checkbox__label"><span>Remember me</span></label>
								</div>
								<a href="#" className="log-form__forg">Forgot password?</a>
							</div> */}
						{/* </form> */}
						{/* <Registrtion title="Sign in"/> */}
						
					</div>
				</div>
			</div>
		
  )
}

export default SignIn