import './Customers.scss';

import { useState } from 'react';

import { data } from '../../api/data';
import { Pagination } from '../../components/pagination/Pagination';
import { Table } from '../../components/table/Table';
import search from '../../icons/search.svg';

export const Customers = () => {
  const [searchItem, setSearchItem] = useState('');

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchItem.toLowerCase()),
    ),
  );

  return (
    <div className="customers">
      <p className="customers__title">Hello Evano 👋🏼,</p>

      <div className="card">
        <div className="headerInfo">
          <div className="info">
            <p className="info__title">All Customers</p>
            <p className="info__specification">Active Members</p>
          </div>

          <div className="searchField">
            <img src={search} alt="search-Icon" className="searchField__icon" />
            <input
              className="searchField__input"
              type="text"
              placeholder="Search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
        </div>

        <div className="mainInfo">
          <Table filteredData={filteredData} />
        </div>

        <div className="footerInfo">
          <p className="explanationInfo">Showing data 1 to 8 of 256K entries</p>
          <Pagination />
        </div>
      </div>
    </div>
  );
};
