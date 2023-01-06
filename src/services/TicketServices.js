import { useHttp } from '../hooks/http.hook';

const useTicketService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = 'http://localhost:3001/';



    const getAllTickets = async (params) => {
        const { filter, value } = params;

        const category = filter && `?category=${filter}`;
        const q = value && `?q=${value}`;
        const res = await request(`${_apiBase}tickets${category}${q}`);
        return res
    }
    const getTicket = async (id) => {
        const res = await request(`${_apiBase}tickets/${id}`);
        return res
    }


    return { loading, error, clearError, getAllTickets, getTicket }
}

export default useTicketService;