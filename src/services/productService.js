import axios from 'axios';


function getProducts(ids) {


    return axios.post(`http://localhost:8081/api/products/cart`, ids, {headers: {Authorization: localStorage.getItem('token')}})
        .then(handleResponse)
        .then(user => {
            // getProducts successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                console.log(user);
            }

            return user;
        });
}


function handleResponse(response) {
    return response.data;
}

export const productService = {
    getProducts
};