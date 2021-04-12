export default function createData(){

    const $email = document.getElementById('email');
    const $phone = document.getElementById('phone');
    const $name = document.getElementById('name');
    const $address = document.getElementById('address');
    const $city = document.getElementById('city');
    const $country = document.getElementById('country');
    const $postal = document.getElementById('postal');


    const data = JSON.parse(localStorage.getItem('usuario'));

    $email.value = data.email;
    $phone.value = data.phone;
    $name.value = data.name;
    $address.value = data.address;
    $city.value = data.city;
    $postal.value = data.postal;
    $country.value = data.country;
    

}