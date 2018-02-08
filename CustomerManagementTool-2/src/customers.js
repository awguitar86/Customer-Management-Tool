import axios from 'axios';
import apiURL from './api';

export const getCustomerList = () => {
    axios.get(apiURL)
        .then(res => res.data);
}

export const postCustomer = (customer) => {
    axios.post(apiURL, customer)
        .then( res => res.data);
}

export const getCustomer = (id) => {
    axios.get(apiURL + id)
        .then( res =>  res.data);
}

export const updateCustomer = (id, obj) => {
    axios.patch(apiURL + id, obj)
        .then( res => res.data);
}

export const deleteCustomer = (id) => {
    axios.delete(apiURL + id)
        .then( res => res.data);
}