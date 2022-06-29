const advice = document.getElementById('advice')
const button = document.getElementById('button')
const jokeId = document.getElementById('jokeId')
button.addEventListener('click', generateAdvice)
async function generateAdvice(){
    const fetchData = await fetch('https://api.adviceslip.com/advice')
    const data = await fetchData.json()
    console.log(data.slip)
    advice.innerHTML = data.slip.advice
    jokeId.innerHTML = `ADVICE # ${data.slip.id}`
}
