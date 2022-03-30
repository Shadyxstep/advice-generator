const API_LINK = "https://api.adviceslip.com/advice"
const slip_number = document.getElementById('advice-number');
const slip_quote = document.getElementById('quote');
const dice_button = document.getElementById('dice-btn');


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
    dice_button.addEventListener('click', generateNewAdvice)
})