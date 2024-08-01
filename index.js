var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var tem = document.querySelector('#temp')
var wind= document.querySelector('#wind')
apik ="ff8049892d154aa6d871d3b5a5c1d9ca"
function convertion(val)
{
    return(val - 273).toFixed(3)
}
btn.addEventListener('click',function()
{

fetch('https://api.openweathermap.org/data/2.5/weather?q={+inputvalue.value+}&appid={+apk}')
.then(res=>res.json())
.then(data=>
{
    var name val = data['name']
    var descrip = data['weather']['0']['description']
    var tempature  = data['main']['temp']
    var windspeed = data['wind']['speed']

    city.innerHTML='weather of<span>${nameval}</span>'
    temp.innerHTML='temprature:<span>${convertion(temperature)}C</span>'
    description.innerHTML='sky conditions:<span>${descrip}</span>'
    wind.innerHTML='wind speed:<span>${windspeed}km/h</span>'


}
)
.catch(err=>alert('you entered wrong city name'))
})
