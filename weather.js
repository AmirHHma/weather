console.time();
let images = [
    '/pics/pexels-alexander-grey-1209843.jpg',
    '/pics/pexels-david-besh-884788.jpg',
    '/pics/pexels-felix-mittermeier-956981.jpg',
    '/pics/pexels-hasan-albari-1103904.jpg',
    '/pics/pexels-pixabay-39284.jpg',
    '/pics/pexels-pixabay-53435.jpg',
    '/pics/pexels-pixabay-60023.jpg',
    '/pics/pexels-trinity-kubassek-288621.jpg'
]
let weather = {
    tehran: { title: 'tehran', degree: 28, weather: 'cloudy', humidity: 60, wind: '12k' },
    qazvin: { title: 'qazvin', degree: 20, weather: 'raining', humidity: 80, wind: '32k' },
    shiraz: { title: 'shiraz', degree: 50, weather: 'sunny', humidity: 22, wind: '8k' },
    mashhad: { title: 'mashhad', degree: 34, weather: 'sunny', humidity: 39, wind: '12k' },
}

let label = document.querySelector('.loading')
let input = document.querySelector('.myInput')
let Btn = document.querySelector('.svg-holder')

let degree = document.querySelector('.degree')
let title = document.querySelector('.title')
let kindWeather = document.querySelector('.weather')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')



document.querySelector('.text-container').style.display = 'none'


Btn.addEventListener('click', (inputValue) => {
    let compiler = weather[input.value]
    let randomNumber = Math.floor(Math.random() * 8)
    document.body.style.backgroundImage = `url(${images[randomNumber]})`
    document.body.style.transition='all 1s ease-out '
    if(compiler){
        
        title.innerHTML = 'Weather of ' + compiler.title
        degree.innerHTML = compiler.degree + '°C'
        kindWeather.innerHTML = compiler.weather
        humidity.textContent = compiler.humidity + '% humidity'
        wind.textContent = compiler.wind + 'ps wind speed'
        label.style.display = 'none'
        document.querySelector('.text-container').style.display = 'block'
    }else{
        alert('search a valid city')
    }


})


console.timeEnd();



