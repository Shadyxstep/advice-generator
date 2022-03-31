const API_LINK = "https://api.adviceslip.com/advice"
const slip_number = document.getElementById('advice-number');
const slip_quote = document.getElementById('quote');
const dice_button = document.getElementById('dice-btn');
const dice_img = document.getElementById('dice');
const vector = document.getElementById('vector');
const attr_text = document.getElementById('attr_text');
const vector_div = document.getElementById('vector_div');


const fetchAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = response.json()
    return advice
}

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    slip_number.textContent = `ADVICE #${id}`;
    slip_quote.textContent = `${advice}`;
}

const generateNewAdvice = async () => {
    const render = await fetchAdvice()
    const advice = render.slip;
    
    renderAdvice(advice);
};

window.addEventListener('DOMContentLoaded', () => {
    dice_button.addEventListener('click', generateNewAdvice);
});

dice_button.addEventListener('click', function(){
    dice_img.classList.toggle('spin');
    setTimeout(() => {
        dice_img.classList.remove('spin')
    }, 900);
});

vector_div.addEventListener('click', function(){

    if(attr_text.classList.contains('hidden')){
        attr_text.classList.remove('hidden');
        attr_text.classList.toggle('fade-in');
        attr_text.classList.remove('fade-out');
    } else {
        attr_text.classList.remove('fade-in');
        attr_text.classList.toggle('fade-out');
        setTimeout(() => {
            attr_text.classList.toggle('hidden')
        }, 1500);
    }
})

const Rotate = () => {
    if (vector_div.classList.contains("normal")) {
        vector_div.classList.add("rotate");
        vector_div.classList.remove("normal");
    } else if (vector_div.classList.contains("rotate")){
        vector_div.classList.add("normal");
        vector_div.classList.add("rotate");
    }
}