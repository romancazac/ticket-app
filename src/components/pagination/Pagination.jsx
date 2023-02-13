import {useEffect,useState} from 'react'

import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { AppContext } from '../../context/appContext';

export const Pagination = () => {

   const { perPage,setData,filterData} = useContext(AppContext);  
   const [currentPage, setCurrentPage] = useState(1);

   const indexOfLastPost = currentPage * perPage;
   const indexOfFirstPost = indexOfLastPost - perPage;
 
   const onPaginationPage = (nr) => {
     setCurrentPage(nr);
    
   }
 
 
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(filterData.length / Number(perPage)); i++) {
       pageNumbers.push(i);
   }
   useEffect(() => {
 
      const currentData  = filterData.slice(indexOfFirstPost, indexOfLastPost)
       setData(
         currentData
       )
       
       },[currentPage,perPage])


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
            pageCount={pageNumbers.length}
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
