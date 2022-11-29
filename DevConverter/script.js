const form = document.getElementById ('form');
form.addEventListener('submit', handlesubmit)
const InputValue = document.getElementById ('value-real');
const selectedCurrency = document.getElementById ('currency');
const result = document.getElementById ('result');
let valueConverted = 0;


function handlesubmit(e) {
    e.preventDefault();

    if(!InputValue.value || InputValue.value <= 0) {
        alert('Informe um valor correto!');
        return;
    }else if(!selectedCurrency.value) {
        alert('Escolha uma moeda');
        return;
    }

  converter();
}


function converter() {
    if(selectedCurrency.value === 'eur') {
        valueConverted = InputValue.value * 5.37;
        result.innerHTML = valueConverted;
        animateResult() ;

    }else if(selectedCurrency.value === 'dol') {
        valueConverted = InputValue.value * 6.20;
        result.innerHTML = valueConverted;  
        animateResult() ;
 
    }


}


    function animateResult() {
        return result.animate( [
            {transform: 'translateY(-150px'},
            {transform: 'translateX(0PX)'},
            

        ], {duration: 500}

        )
    }






