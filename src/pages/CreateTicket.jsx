
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'

import DropDown from '../components/dropdown/DropDown';
import { useSelect } from '../hooks/select.hook';
import { Select } from '../components/select/Select';
export const CreateTicket = () => {

   const {onUser, users, setUsers,activeClient} = useSelect();
   const [us1, setUs1] = useState([])
   const [us2, setUs2] = useState([])
   const [us3, setUs3] = useState([])
   console.log(us1, us2,us3)
  
   const formik = useFormik({
      initialValues: {
 
         body:''
       
      },
      onSubmit: values => console.log(JSON.stringify([us1,us2, values], null, 2))
   })


   return (
      <form class="content-body__rows ticket-info" onSubmit={formik.handleSubmit}>
         <div class="ticket-info__header">
            <div class="ticket-info__top ticket-create">
               <div class="ticket-create__colum">
                  <div class="ticket-create__line">
                     <span class="ticket-create__lable">*Client:</span>

                     <Select
                     dropItems={["Jora Cardan", "Vanea Caldare", "Dumitru Vartan" ]}
                     activeClient={us2}
                     setActiveClient={setUs2}

                     />
                     {/* <DropDown
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

                     </DropDown> */}
                  </div>
                  <div class="ticket-create__line">
                     <span class="ticket-create__lable">To:</span>
                     <Select
                     dropItems={["user1", "user2", "user3" ]}
                     activeClient={us1}
                     setActiveClient={setUs1}
                     />
                  </div>
                  <div class="ticket-create__line">
                     <span class="ticket-create__lable">*Subject:</span>
                     <Select
                     dropItems={["sub1", "sub2", "sub3" ]}
                     activeClient={us3}
                     setActiveClient={setUs3}
                     />
                  </div>
               </div>
               <div class="ticket-create__colum">
                  <div class="ticket-create__line">
                     <span class="ticket-create__lable">Category:</span>

                     <div class="ticket-create__dropdown dropdown ">
                        {/* <!-- add class dropdown__name "_active-drop" open drop -->
                        <!-- exemple  <span class="dropdown__name _active-drop"></span> --> */}
                        <span class="dropdown__name _active-drop">
                           <div class="dropdown__names ">
                              Category
                           </div>

                           <span class="dropdown__icon">
                              <svg fill="none">
                                 <path d="M6.49996 8.20529C6.26698 8.20529 6.03402 8.11633 5.85639 7.93878L0.266684 2.34902C-0.0888946 1.99344 -0.0888946 1.41693 0.266684 1.0615C0.622118 0.706063 1.19851 0.706063 1.55412 1.0615L6.49996 6.00763L11.4458 1.06167C11.8014 0.706236 12.3778 0.706236 12.7332 1.06167C13.0889 1.4171 13.0889 1.99361 12.7332 2.34919L7.14354 7.93896C6.96582 8.11653 6.73286 8.20529 6.49996 8.20529Z" />
                              </svg>
                           </span>

                        </span>
                        <ul class="dropdown__items">
                           <li>
                              <button class="dropdown__item _active ">
                                 Development
                              </button>
                           </li>
                           <li>
                              <button class="dropdown__item ">
                                 Support
                              </button>
                           </li>


                        </ul>
                     </div>
                  </div>
                  <div class="ticket-create__line">
                     <span class="ticket-create__lable">Priority:</span>
                     <div class="ticket-create__dropdown dropdown ">
                        {/* <!-- add class dropdown__name "_active-drop" open drop -->
                        <!-- exemple  <span class="dropdown__name _active-drop"></span> --> */}
                        <span class="dropdown__name">
                           <div class="dropdown__names ">
                              Category
                           </div>

                           <span class="dropdown__icon">
                              <svg fill="none">
                                 <path d="M6.49996 8.20529C6.26698 8.20529 6.03402 8.11633 5.85639 7.93878L0.266684 2.34902C-0.0888946 1.99344 -0.0888946 1.41693 0.266684 1.0615C0.622118 0.706063 1.19851 0.706063 1.55412 1.0615L6.49996 6.00763L11.4458 1.06167C11.8014 0.706236 12.3778 0.706236 12.7332 1.06167C13.0889 1.4171 13.0889 1.99361 12.7332 2.34919L7.14354 7.93896C6.96582 8.11653 6.73286 8.20529 6.49996 8.20529Z" />
                              </svg>
                           </span>

                        </span>
                        <ul class="dropdown__items">
                           <li>
                              <button class="dropdown__item _active ">
                                 Development
                              </button>
                           </li>
                           <li>
                              <button class="dropdown__item ">
                                 Support
                              </button>
                           </li>


                        </ul>
                     </div>
                  </div>

               </div>
            </div>

         </div>
         <div class="ticket-info__footer form-ticket form-ticket_redactor">
            <div class="form-ticket__elements">
               <div class="form-ticket__body">
                  <textarea class="form-ticket__textarea"
                     name="body"
                     value={formik.values.body}
                     onChange={formik.handleChange}
                     id="#">Start typing...</textarea>
               </div>

               <div class="form-ticket__row">
                  <div class="form-ticket__select">
                     Ticket status
                     <select name="status" id="#">
                        <option selected>Choose status</option>
                        <option value="1">
                           Status 1
                        </option>
                        <option value="2"> Status 2</option>
                     </select>
                  </div>
                  <div class="form-ticket__btns">
                     <button type='sumit' class="ticket-body__show  btn-block">
                        Send
                     </button>
                     <a href="#" class="ticket-body__show ticket-body__show_border btn-block">
                        Cancel
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </form>
   )
}
