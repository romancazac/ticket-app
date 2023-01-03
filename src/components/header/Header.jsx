import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import DropDown from "../dropdown/DropDown";
import FilterItem from "../filter/FilterItem";
import Search from "../search/Search";

const Header = () => {
  const { onFilter, filter, onSort,sort,sortSub, onSortSub } = useContext(AppContext);
  const filterItems = [
    {
      title: "Last edited",
    },
    {
      title: "Date created",
      subItems: true,
    },
  ];
  const sortItems = [
    {
      title: "Category",
    },
    {
      title: "Priority",
      subItems: [
        {
          title: "High",
          icon: "icon-high",
        },
        {
          title: "Medium",
          icon: "",
        },
        {
          title: "Low",
          icon: "icon-low",
        },
      ],
    },
    {
      title: "Status",
    },
    {
      title: "Author",
    },
    {
      title: "Responsible",
    },
  ];

  return (
    <header className="dashboard-content__header">
      <div className="dashboard-content__l">
        <h2 className="dashboard-content__title">Ticket list</h2>
        <span className="dashboard-content__count">120 tickets</span>
      </div>
      <div className="dashboard-content__r ">
        <div className="dashboard-content__actions">
          <Search />
          <div className="dashboard-content__actions">
            <DropDown
              title={null}
              className={"dashboard-content__dropdown"}
              dropItems={null}
              dropIcon={
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.5453 15.2046C24.3344 14.9937 24.0483 14.8752 23.75 14.8752C23.4517 14.8752 23.1656 14.9937 22.9546 15.2046L19.25 18.9093V1.375C19.25 1.07663 19.1314 0.790483 18.9205 0.579505C18.7095 0.368526 18.4233 0.25 18.125 0.25C17.8266 0.25 17.5405 0.368526 17.3295 0.579505C17.1185 0.790483 17 1.07663 17 1.375V18.9093L13.2953 15.2046C13.0832 14.9997 12.799 14.8863 12.504 14.8889C12.209 14.8914 11.9269 15.0097 11.7183 15.2183C11.5097 15.4269 11.3914 15.7091 11.3888 16.004C11.3863 16.299 11.4997 16.5832 11.7046 16.7954L17.3296 22.4204C17.4341 22.5251 17.5582 22.6083 17.6949 22.665C17.8316 22.7217 17.9781 22.7509 18.1261 22.7509C18.2741 22.7509 18.4206 22.7217 18.5573 22.665C18.6939 22.6083 18.8181 22.5251 18.9226 22.4204L24.5476 16.7954C24.7582 16.5841 24.8763 16.2978 24.8759 15.9995C24.8754 15.7012 24.7565 15.4153 24.5453 15.2046Z" />
                  <path d="M13.2954 6.20469L7.67036 0.579687C7.56558 0.474703 7.44089 0.391704 7.30361 0.335562C7.0284 0.221805 6.71931 0.221805 6.44411 0.335562C6.30682 0.391704 6.18213 0.474703 6.07736 0.579687L0.452356 6.20469C0.241409 6.41593 0.123019 6.70232 0.12323 7.00086C0.123441 7.29939 0.242236 7.58562 0.453481 7.79656C0.664726 8.00751 0.951117 8.1259 1.24965 8.12569C1.54819 8.12548 1.83441 8.00668 2.04536 7.79544L5.74998 4.09081V21.6251C5.74998 21.9234 5.86851 22.2096 6.07949 22.4206C6.29046 22.6315 6.57661 22.7501 6.87498 22.7501C7.17335 22.7501 7.4595 22.6315 7.67048 22.4206C7.88145 22.2096 7.99998 21.9234 7.99998 21.6251V4.09081L11.7046 7.79544C11.9168 8.00037 12.201 8.11376 12.4959 8.1112C12.7909 8.10863 13.0731 7.99032 13.2817 7.78173C13.4902 7.57315 13.6086 7.29099 13.6111 6.99601C13.6137 6.70104 13.5003 6.41686 13.2954 6.20469Z" />
                </svg>
              }
            >
              <ul className="dropdown__items">
                {filterItems.map((item, i) => (
                  <FilterItem
                    name={item.title}
                    onClick={() => onFilter(i)}
                    className={
                      filter === i ? "dropdown__item _active" : "dropdown__item"
                    }
                  >
                    {item.subItems && (
                      <ul className="dropdown__sublist sublist-drop">
                        <li>
                          <form action="#" className="sublist-drop__row">
                            <input
                              type="text"
                              name="day"
                              placeholder="Day"
                              className="sublist-drop__day"
                            />
                            <select className="sublist-drop__select" id="month">
                              <option selected="selected">Month</option>
                              <option value="1">1January</option>
                              <option value="2">February</option>
                              <option value="3">March</option>
                              <option value="4">April</option>
                              <option value="5">May</option>
                              <option value="6">June</option>
                              <option value="7">July</option>
                              <option value="8">August</option>
                              <option value="9">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                            <input
                              type="text"
                              name="year"
                              placeholder="Year"
                              className="sublist-drop__year"
                            />
                          </form>
                        </li>
                      </ul>
                    )}
                  </FilterItem>
                ))}
              </ul>
            </DropDown>

            <DropDown
              title={null}
              className={"dashboard-content__dropdown"}
              dropItems={null}
              dropIcon={
                <svg fill="none">
                  <path d="M8.76038 10.8684C9.00174 11.131 9.13425 11.4741 9.13425 11.8291V22.2881C9.13425 22.9175 9.89383 23.237 10.3434 22.7945L13.2611 19.4509C13.6515 18.9824 13.8668 18.7505 13.8668 18.2867V11.8314C13.8668 11.4765 14.0017 11.1334 14.2407 10.8707L22.6126 1.78655C23.2397 1.10506 22.757 0 21.8294 0H1.17166C0.24408 0 -0.24101 1.10269 0.388423 1.78655L8.76038 10.8684Z" />
                </svg>
              }
            >
              <ul className="dropdown__items">
                {sortItems.map((item, i) => (
                  <FilterItem
                    name={item.title}
                    key={item.title}
                    onClick={() => onSort(item.title)}
                    className={
                      sort === item.title ? "dropdown__item _active" : "dropdown__item"
                    }
                  >
                    {item.subItems && (
                      <ul className="dropdown__sublist sublist-drop">
                        {item.subItems.map((subItem) => (
                          <li className="sublist-drop__li">
                            <button
                              key={subItem.title}
                              className={                                
                                sortSub === subItem.title ? 
                                `dropdown__item ${subItem.icon} _active` :
                                `dropdown__item ${subItem.icon}`
                              }
                              onClick={() => onSortSub(subItem.title)}
                            >
                              {subItem.title}
                            </button>
                          </li>
                        ))}
                        
                      </ul>
                    )}
                  </FilterItem>
                ))}
              </ul>
            </DropDown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
