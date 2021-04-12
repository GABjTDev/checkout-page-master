import Product from './js/product.js';
import formValidation from './js/formValidation.js';
import createData from './js/createData.js';

window.addEventListener('DOMContentLoaded', () => {

    if(localStorage.getItem('usuario')){
        createData();
    }

    Product();
    formValidation();

})