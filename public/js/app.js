const weatherform = document.querySelector('form')
const search = document.querySelector('input')

const forecast = document.querySelector('#forecast')
const Temperatue = document.querySelector('#Temperatue')
const Feels_like = document.querySelector('#Feels_like')

weatherform.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location = search.value
    
    fetch('http://localhost:3000/weather?Address=' + location).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            console.log(data.error)
            else{
                console.log(data)
                forecast.textContent='Forecast: ' + data.forecast.Forecast
                Temperatue.textContent='Temperatue: ' + data.forecast.Temperature + '°C'
                Feels_like.textContent='Feels like: ' + data.forecast.feelslike + '°C'
            }
        })
    })
})