import React, { useEffect, useState } from "react";

import DropDown from "../components/dropdown/DropDown";
import FilterItem from "../components/filter/FilterItem";

import { Select } from "../components/select/Select";
import useTicketService from "../services/TicketServices";
export const CreateTicket = () => {

  const { createTicket } = useTicketService()

  const [client, setClient] = useState([]);
  const [to, setTo] = useState([]);
  const [subject, setSubject] = useState([]);
  const [category, setCategory] = useState([]);
  const [priority, setPriority] = useState([]);
  const [body, setBody] = useState([]);
  const [status, setStatus] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const dataForm = {
      author: client,
      to: to,
      title: subject,
      category: category,
      priority: priority,
      body:body,
      status:status

    };
    createTicket(JSON.stringify(dataForm))
    
  };


  useEffect(() => {
   
  },[])
  return (
    <form className="content-body__rows ticket-info" onSubmit={handleForm}>
      <div className="ticket-info__header">
        <div className="ticket-info__top ticket-create">
          <div className="ticket-create__colum">
            <div className="ticket-create__line">
              <span className="ticket-create__lable">*Client:</span>

              <Select
                dropItems={["Jora Cardan", "Vanea Caldare", "Dumitru Vartan"]}
                activeClient={client}
                setActiveClient={setClient}
                checkbox={true}
              />
            </div>
            <div className="ticket-create__line">
              <span className="ticket-create__lable">To:</span>
              <Select
                dropItems={["user1", "user2", "user3"]}
                activeClient={to}
                setActiveClient={setTo}
                checkbox={true}
              />
            </div>
            <div className="ticket-create__line">
              <span className="ticket-create__lable">*Subject:</span>
              <Select
                dropItems={["subject1", "subject2", "subject3"]}
                activeClient={subject}
                setActiveClient={setSubject}
                checkbox={true}
              />
            </div>
          </div>
          <div className="ticket-create__colum">
            <div className="ticket-create__line">
              <span className="ticket-create__lable">Category:</span>
              <Select
                dropItems={['Development', 'Support']}
                activeClient={category}
                setActiveClient={setCategory}
                checkbox={false}
              />

            </div>
            <div className="ticket-create__line">
              <span className="ticket-create__lable">Priority:</span>
              <Select
                dropItems={['High', 'Low']}
                activeClient={priority}
                setActiveClient={setPriority}
                checkbox={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ticket-info__footer form-ticket form-ticket_redactor">
        <div className="form-ticket__elements">
          <div className="form-ticket__body">
            <textarea
              className="form-ticket__textarea"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              id="#"
            >
              Start typing...
            </textarea>
          </div>

          <div className="form-ticket__row">
            <div className="form-ticket__select">
              Ticket status
              <select name="status" id="#" onChange={(e) => setStatus(e.target.value)}>
                <option value=''>Choose status</option>
                <option value="Responsible">Responsible</option>
                <option value="Not responsible">Not responsible</option>
              </select>
            </div>
            <div className="form-ticket__btns">
              <button type="sumit" className="ticket-body__show  btn-block">
                Send
              </button>
              <a
                href="#"
                className="ticket-body__show ticket-body__show_border btn-block"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
