import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { useSelect } from '../../hooks/select.hook';
import { Pagination } from '../pagination/Pagination';
import { Select } from '../select/Select';

const Footer = ({}) => {
const {perPage, setPerPage } = useContext(AppContext)


  return (
    <footer className="dashboard-content__footer footer-dash">
      <div className="footer-dash__left">
        <div className="footer-dash__drop">

          <Select
            dropItems={[100, 60, 30]}
            activeClient={perPage}
            setActiveClient={setPerPage }
            checkbox={false}
            className={"footer-dash__dropdown "}
            placeholder={'100'}
          />
          per page
        </div>
        <div className="footer-dash__center pagination">
          <Pagination />
        </div>
      </div>

      <div className="footer-dash__copy">
        Copyright © 2022-2023 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;