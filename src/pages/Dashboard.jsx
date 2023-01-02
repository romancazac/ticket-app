import React from 'react'
import DropDown from '../components/dropdown/DropDown'
import Header from '../components/header/Header'
import Switch from '../components/switch/Switch'



const Dashboard = () => {

  const dropItems = [
    {
      title:'Configuration',
      url:'/',
      icon:true
    },
    {
      title:'Log out',
      url:'/'
    }
  ]

  return (
    <div className="page-dashboard__row">
				<aside className="page-dashboard__aside aside ">
					{/* <!-- toggle click "aside__btn-open" className "menu-open" open/close menu to > 1200px -->
					<!-- ex - <aside className="page-dashboard__aside aside menu-open"> --> */}
					<button className="aside__btn-open icon-menu">
						<span></span>
					</button>
					<a href="#" className="aside__logo">KG</a>
					<div className="aside__top">

            <DropDown 
              title="Katerina Gorgos" 
              className={'aside__dropdown'}
              dropIcon={
                <svg fill="none">
                    <path d="M6.49996 8.20529C6.26698 8.20529 6.03402 8.11633 5.85639 7.93878L0.266684 2.34902C-0.0888946 1.99344 -0.0888946 1.41693 0.266684 1.0615C0.622118 0.706063 1.19851 0.706063 1.55412 1.0615L6.49996 6.00763L11.4458 1.06167C11.8014 0.706236 12.3778 0.706236 12.7332 1.06167C13.0889 1.4171 13.0889 1.99361 12.7332 2.34919L7.14354 7.93896C6.96582 8.11653 6.73286 8.20529 6.49996 8.20529Z" />
                </svg>               
               } 
              >
              <ul className="dropdown__items">
                {
                    dropItems?.map((item) =>
                    <li key={item.title}><a className={item.icon ? "dropdown__item dropdown__item_conf" : "dropdown__item"} href={item.url}>{item.title}</a></li>
                    )
                }
            </ul>
            </DropDown>
						<button className="aside__btn btn-block"><span>Create ticket</span></button>
					</div>
					<div className="aside__body">
						<nav className="aside__nav nav-aside">
							<ul className="nav-aside__list">
								<li><a href="tickets.html" className="nav-aside__item _active">Tickets</a></li>
								<li><a href="repoarts.html" className="nav-aside__item">Reports</a></li>
							</ul>
						</nav>

            <DropDown 
            title="Configuration" 
            icon={"dropdown__name_conf-icon"}
            dropIcon={
              <svg fill="none">
                  <path d="M6.49996 8.20529C6.26698 8.20529 6.03402 8.11633 5.85639 7.93878L0.266684 2.34902C-0.0888946 1.99344 -0.0888946 1.41693 0.266684 1.0615C0.622118 0.706063 1.19851 0.706063 1.55412 1.0615L6.49996 6.00763L11.4458 1.06167C11.8014 0.706236 12.3778 0.706236 12.7332 1.06167C13.0889 1.4171 13.0889 1.99361 12.7332 2.34919L7.14354 7.93896C6.96582 8.11653 6.73286 8.20529 6.49996 8.20529Z" />
              </svg>               
             
            }
             className={'aside__dropdown'}
            >
            <ul className="dropdown__items">
                {
                    dropItems?.map((item) =>
                    <li key={item.title}><a className={item.icon ? "dropdown__item dropdown__item_conf" : "dropdown__item"} href={item.url}>{item.title}</a></li>
                    )
                }
            </ul>
            </DropDown>
            <Switch />
					</div>
					<a href="#" className="aside__footer">
						<img src="img/log/logo.svg" alt=""/>
					</a>
				</aside>
				<div className="page-dashboard__content dashboard-content">
          <Header/>  
					<div className="dashboard-content__body content-body">

						<div className="content-body__rows">
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_with"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_green"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_blue"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									<span className="content-row__lable icon-high">
									</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_blue"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									<span className="content-row__lable icon-low">
									</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_green"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_blue"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<div className="content-body__row content-row _red">
								<span className="content-row__icon content-row__icon_red"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</div>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_with"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									{/* <!-- <span className="content-row__lable icon-high">
									</span> --> */}
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_with"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									{/* <!-- <span className="content-row__lable icon-high">
									</span> --> */}
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_with"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									<span className="content-row__lable icon-high">
									</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<div className="content-body__row content-row _red">
								<span className="content-row__icon content-row__icon_red"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									{/* <!-- <span className="content-row__lable icon-high">
									</span> --> */}
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</div>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_with"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									{/* <!-- <span className="content-row__lable icon-high">
									</span> --> */}
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_with"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									<span className="content-row__lable icon-high">
									</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_with"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									<span className="content-row__lable icon-high">
									</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_with"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									<span className="content-row__lable icon-high">
									</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>
							<a href="#" className="content-body__row content-row">
								<span className="content-row__icon content-row__icon_with"></span>
								<div className="content-row__column">
									<div className="content-row__title">

										Ticket title
									</div>
									<span className="content-row__lable icon-high">
									</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">User name</span>
									<span className="content-row__date">12 November 2022</span>
								</div>
								<div className="content-row__column">
									<span className="content-row__username">Responsible</span>
								</div>
							</a>

						</div>



					</div>
					<footer className="dashboard-content__footer footer-dash">
						<div className="footer-dash__left">
							<div className="footer-dash__drop">
								<div className="footer-dash__dropdown dropdown ">
									{/* <!-- add className dropdown__name "_active-drop" open drop -->
									<!-- exemple  <span className="dropdown__name _active-drop"></span> --> */}
									<span className="dropdown__name">
										100
										<span className="dropdown__icon">
											<svg fill="none">
												<path d="M6.49996 8.20529C6.26698 8.20529 6.03402 8.11633 5.85639 7.93878L0.266684 2.34902C-0.0888946 1.99344 -0.0888946 1.41693 0.266684 1.0615C0.622118 0.706063 1.19851 0.706063 1.55412 1.0615L6.49996 6.00763L11.4458 1.06167C11.8014 0.706236 12.3778 0.706236 12.7332 1.06167C13.0889 1.4171 13.0889 1.99361 12.7332 2.34919L7.14354 7.93896C6.96582 8.11653 6.73286 8.20529 6.49996 8.20529Z" />
											</svg>
										</span>

									</span>
									<ul className="dropdown__items">
										<li><button className="dropdown__item dropdown__item_custum">Custom</button></li>
										<li><button className="dropdown__item _active">100</button></li>
										<li><button className="dropdown__item">50</button></li>
										<li><button className="dropdown__item">30</button></li>
										<li><button className="dropdown__item">20</button></li>
									</ul>
								</div>
								per page
							</div>
							<div className="footer-dash__center pagination">
								<nav className="pagination__nav">
									<ul className="pagination__list">
										<li className="pagination__li pagination__li_icon">
											<button className="pagination__btn pagination__btn_icon pagination__btn_icon-l"></button>
										</li>
										<li className="pagination__li pagination__li_icon">
											<button className="pagination__btn pagination__btn_icon pagination__btn_icon-l_m"></button>
										</li>

										<li className="pagination__li">
											<button className="pagination__item _active">1</button>
										</li>
										<li className="pagination__li">
											<button className="pagination__item">3</button>
										</li>
										<li className="pagination__li">
											<button className="pagination__item">4</button>
										</li>
										<li className="pagination__li">
											<button className="pagination__item">5</button>
										</li>
										<li className="pagination__li">
											<button className="pagination__item">...</button>
										</li>
										<li className="pagination__li">
											<button className="pagination__item">20</button>
										</li>

										<li className="pagination__li pagination__li_icon">
											<button className="pagination__btn pagination__btn_icon pagination__btn_icon-r"></button>
										</li>
										<li className="pagination__li pagination__li_icon">
											<button className="pagination__btn pagination__btn_icon pagination__btn_icon-r_m"></button>
										</li>

									</ul>
								</nav>
							</div>

						</div>


						<div className="footer-dash__copy">Copyright © 2022-2023 All rights reserved.</div>


					</footer>
				</div>
     </div>   
  )
}

export default Dashboard