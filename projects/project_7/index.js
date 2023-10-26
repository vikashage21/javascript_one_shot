

const fecthUrl="http://api.openweathermap.org/data/2.5/air_pollution?lat=25.09&lon=85.31&appid=dcbfaf1280ee3b4861efa39e6b5fbe3b"

fetch(fecthUrl).then((Response)=>{
    return Response.json()
}).then((data)=>{
const results = document.querySelector('.results');

const con= document.querySelector('.container')


const aqi=data.list[0].main.aqi

const p = document.createElement('p')
p.innerHTML=`
<h4>  THE AQI INDEX OF BIHAR IS  ${aqi}   </h4>

`
con.appendChild(p)




const components= data.list[0].components


const div =`

<h6>${components.pm2_5} (PM 2.5)</h6>
            <h6> ${components.pm10} (PM10)</h6>
            <h6> ${components.so2} (S02)</h6>
            <h6> ${components.co} (CO)</h6>
            <h6> ${components.o3} (OZONE)</h6>
            <h6> ${components.no2} (NO2)</h6>


`

console.log(components)

results.innerHTML=div ;



}).catch((error)=>{
    console.log(error)
})