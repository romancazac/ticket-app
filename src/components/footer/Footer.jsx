import React, { useState } from 'react';
import { useSelect } from '../../hooks/select.hook';
import { Select } from '../select/Select';

const Footer = () => {
  
  const [page, setPage] = useState([])

    return (
        <footer className="dashboard-content__footer footer-dash">
        <div className="footer-dash__left">
          <div className="footer-dash__drop">

            <Select
                dropItems={[100,60,30]}
                activeClient={page}
                setActiveClient={setPage}
                checkbox={false}
                className={"footer-dash__dropdown "}
              />
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

        <div className="footer-dash__copy">
          Copyright © 2022-2023 All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;