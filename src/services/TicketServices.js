import { useHttp } from '../hooks/http.hook';

const useTicketService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = 'http://localhost:3001/';



    const getAllTickets = async (params) => {
        const { filter, value, sort, create, priority, category, status,currentPage,perPage } = params;
       const pagination = `?_start=${currentPage}&_limit=${perPage}`
        const edit = sort == "edit" ? '&_sort=edit&_order=desc&' : '';
        const abc= sort == "author"  ? `&_sort=${sort}&_order=asc` : '';
        const creat = filter == "create" && create ? `&date=${create}&` : '';
        const priorit = filter == "priority" && priority ? `&priority=${priority}&` : '';
        const cat = filter == "category" && category ? `&category=${category}&` : '';
        const stat = filter == "status" && status ? `&status=${status}&` : '';
        
        const search = value && `?q=${value}`;

        const res = await request(`${_apiBase}tickets${pagination}?${abc}${search}${edit}${creat}${priorit}${cat}${stat}`);
        
        return res
    }
    const getTicket = async (id) => {
        const res = await request(`${_apiBase}tickets/${id}`);
        return res
    }
    const createTicket = async (obj) => {
        const res = await request(`${_apiBase}tickets/`, 'POST', obj);
        return res
    }


    return { loading, error, clearError, getAllTickets, getTicket, createTicket }
}

export default useTicketService;