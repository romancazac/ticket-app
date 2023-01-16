import React, { useEffect, useState } from "react";

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
  const dateCreate = new Date();
  const parseDate = dateCreate.getDate()+' '+dateCreate.getMonth()+1 +' '+ dateCreate.getFullYear();

  const handleForm = (e) => {
    e.preventDefault();
    const dataForm = {
      author: client,
      to: to,
      title: subject,
      category: category,
      priority: priority,
      body:body,
      status:status,
      date:parseDate,
      edit:parseDate

    };
    createTicket(JSON.stringify(dataForm))
    
  };

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
                className={"ticket-create__dropdown"}
              />
            </div>
            <div className="ticket-create__line">
              <span className="ticket-create__lable">To:</span>
              <Select
                dropItems={["user1", "user2", "user3"]}
                activeClient={to}
                setActiveClient={setTo}
                checkbox={true}
                className={"ticket-create__dropdown"}
              />
            </div>
            <div className="ticket-create__line">
              <span className="ticket-create__lable">*Subject:</span>
              <Select
                dropItems={["subject1", "subject2", "subject3"]}
                activeClient={subject}
                setActiveClient={setSubject}
                checkbox={true}
                className={"ticket-create__dropdown"}
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
                className={"ticket-create__dropdown"}
              />

            </div>
            <div className="ticket-create__line">
              <span className="ticket-create__lable">Priority:</span>
              <Select
                dropItems={['High','Medium', 'Low']}
                activeClient={priority}
                setActiveClient={setPriority}
                checkbox={false}
                className={"ticket-create__dropdown"}
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
           
           />
            
        
          </div>

          <div className="form-ticket__row">
            <div className="form-ticket__select">
              Ticket status
              <select name="status" id="#" onChange={(e) => setStatus(e.target.value)}>
                <option value="Choose status">Choose status</option>
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
