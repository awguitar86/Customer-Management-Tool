import axios from 'axios';
import apiURL from './api';

export const getCustomerList = () => {
    axios.get(apiURL)
        .then(res => res.data);
}

export const postCustomer = (customer) => {
    axios.post(apiURL, customer)
        .then( res => res);
}