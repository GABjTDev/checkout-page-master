export default function Product(){

    const $reduce = document.querySelectorAll('.remove');
    const $add = document.querySelectorAll('.add');
    const $total = document.querySelector('.total');

    let valorInicial;

    $add.forEach(btn => {
        btn.addEventListener('click', () => {

            const $count = btn.parentElement.firstElementChild.nextElementSibling;
            const $price = btn.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild;

            if(parseInt($count.value) === 1){
                valorInicial = parseInt($price.innerHTML.slice(1));
            }

            if(parseInt($count.value) > 0 && parseInt($count.value) < 10){
                $count.value = parseInt($count.value) + 1;
                $price.innerHTML = `$${parseInt($count.value) * valorInicial}`;
                const product1 = document.querySelector('.product1').innerHTML.slice(1);
                const product2 = document.querySelector('.product2').innerHTML.slice(1);
                $total.innerHTML = `$${parseInt(product1) + parseInt(product2) + 19}`;
            }


            console.log($total);
        })
    })


    $reduce.forEach(btn => {
        btn.addEventListener('click', () => {

            const $count = btn.parentElement.firstElementChild.nextElementSibling;
            const $price = btn.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild;

            if(parseInt($count.value) > 1){
                $count.value = parseInt($count.value) - 1;
                const number = parseInt($price.innerHTML.slice(1));
                $price.innerHTML = `$${number - valorInicial}`;

                const product1 = document.querySelector('.product1').innerHTML.slice(1);
                const product2 = document.querySelector('.product2').innerHTML.slice(1);
                $total.innerHTML = `$${parseInt(product1) + parseInt(product2) + 19}`;
            }

        })
    })

}