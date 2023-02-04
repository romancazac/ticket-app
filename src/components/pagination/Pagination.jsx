import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { AppContext } from '../../App';

export const Pagination = () => {
   const { onPaginationPage,  postsPerPage, totalPosts,} = useContext(AppContext);
   // const [count , setCount] = useState([])

  
   // const pageCount = Math.ceil(count / (perPage == false ?  100 : perPage ) );
   // useEffect(() => {
   //    setCount( data.length)
   //    console.log(data.length)
   // },[perPage])
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
       pageNumbers.push(i);
   }

   console.log(pageNumbers)

   return (
      <nav className="pagination__nav">
         <ReactPaginate
            className='pagination__list'
            breakLabel="..."
            nextLabel={
               <button className="pagination__btn pagination__btn_icon pagination__btn_icon-r_m"></button>
            }
            onPageChange={(e) => onPaginationPage(e.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={pageNumbers}
            previousLabel={
               <button className="pagination__btn pagination__btn_icon pagination__btn_icon-l"></button>
           }
         
         />
         {/* <ul className="pagination__list">
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
         </ul> */}
      </nav>
   )
}
