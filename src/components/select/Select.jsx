import React,{useEffect} from 'react'
import { useSelect } from '../../hooks/select.hook';
import DropDown from '../dropdown/DropDown';

export const Select = ({dropItems}) => {


   const {onUser, users, setUsers,activeClient} = useSelect();


   useEffect(() => {
      setUsers(dropItems)
   }, [])
   return (
      <DropDown
         title={activeClient + '' || "Select user..."}
         className={"ticket-create__dropdown"}
         dropIcon={
            <svg fill="none">
               <path d="M6.49996 8.20529C6.26698 8.20529 6.03402 8.11633 5.85639 7.93878L0.266684 2.34902C-0.0888946 1.99344 -0.0888946 1.41693 0.266684 1.0615C0.622118 0.706063 1.19851 0.706063 1.55412 1.0615L6.49996 6.00763L11.4458 1.06167C11.8014 0.706236 12.3778 0.706236 12.7332 1.06167C13.0889 1.4171 13.0889 1.99361 12.7332 2.34919L7.14354 7.93896C6.96582 8.11653 6.73286 8.20529 6.49996 8.20529Z" />
            </svg>
         }
      >
         <ul class="dropdown__items">
            {
               users.map((user, i) =>
                  <li>
                     <div class="dropdown__item checkbox">
                        <input id={user}
                           type="checkbox"
                           name="remember"
                           onClick={
                              () => onUser(i)}

                           class="checkbox__input" />
                        <label for={user}
                           class="checkbox__label"><span>{user}</span></label>
                     </div>
                  </li>
               )
            }

         </ul>

      </DropDown>
   )
}