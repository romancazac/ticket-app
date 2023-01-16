import { useHttp } from '../hooks/http.hook';

const useTicketService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = 'http://localhost:3001/';



    const getAllTickets = async (params) => {
        const { filter, value, sort, create, priority } = params;
        console.log(filter, priority)
        const edit = sort == "edit" ? `?_sort=edit&_order=desc` : '' ;
        const creat =  sort == "create" && create ? `?date=${create}`:'' ;
        const priorit =  filter == "priority" && priority ? `?priority=${priority}`:'' ;
        // const category = filter && `?category=${filter}`;
        const q = value && `?q=${value}`;
        const res = await request(`${_apiBase}tickets${q}${edit}${creat}${priorit}`);
        return res
    }
    const getTicket = async (id) => {
        const res = await request(`${_apiBase}tickets/${id}`);
        return res
    }
    const createTicket = async (obj) => {
        const res = await request(`${_apiBase}tickets/`,'POST', obj);
        return res
    }


    return { loading, error, clearError, getAllTickets, getTicket, createTicket }
}

export default useTicketService;