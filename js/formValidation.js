export default function formValidation(){

    const $form = document.querySelector('form');
    const $checkbox = document.querySelector('#cbox');

    let formValid = true;

    $form.addEventListener('submit', (e) => {

        e.preventDefault();

        const $email = document.getElementById('email');
        const $phone = document.getElementById('phone');
        const $name = document.getElementById('name');
        const $address = document.getElementById('address');
        const $city = document.getElementById('city');
        const $country = document.getElementById('country');
        const $postal = document.getElementById('postal');

        if($email.value === ''){
            $email.classList.add('error');
        }else{
            $email.classList.remove('error');
        }

        if($phone.value === ''){
            $phone.classList.add('error');
        }else{
            $phone.classList.remove('error');
        }

        if($name.value === ''){
            $name.classList.add('error');
        }else{
            $name.classList.remove('error');
        }

        if($address.value === ''){
            $address.classList.add('error');
        }else{
            $address.classList.remove('error');
        }

        if($city.value === ''){
            $city.classList.add('error');
        }else{
            $city.classList.remove('error');
        }

        if($country.value === 'Your country...'){
            $country.classList.add('error');
        }else{
            $country.classList.remove('error');
        }

        if($postal.value === ''){
            $postal.classList.add('error');
        }else{
            $postal.classList.remove('error');
        }


        if($email.value === ''    || 
            $phone.value === ''   ||
            $name.value === ''    ||
            $address.value === '' ||
            $city.value === ''    ||
            $postal.value === ''  ||
            $country.value === 'Your country...'
        ){
            formValid = false;
        }else{
            formValid = true;  
        }

        if($checkbox.checked && formValid){
            const user = {
                email: $email.value,
                phone: $phone.value,
                name: $name.value,
                address: $address.value,
                city: $city.value,
                country: $country.value,
                postal: $postal.value
            }
            localStorage.setItem('usuario', JSON.stringify(user));
        }

    });



}