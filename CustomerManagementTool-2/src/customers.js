import axios from 'axios';
import apiURL from './api';

export const getCustomerList = () => {
    return axios.get(apiURL).then(res => {
            return res.data;
        })
}

export const postCustomer = (customer) => {
    return axios.post(apiURL, customer).then( res => {
        return res.data
    });
}

export const getCustomer = (id) => {
    return axios.get(apiURL + id).then( res =>  {
        return res.data
    });
}

export const updateCustomer = (id, obj) => {
    return axios.patch(apiURL + id, obj).then( res => {
        return res.data
    });
}

export const deleteCustomer = (id) => {
    return axios.delete(apiURL + id).then( res => {
        return res.data
    });
}