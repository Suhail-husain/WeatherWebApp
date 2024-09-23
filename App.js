const key="20fa987a5ecb4968b6f123533242009";
const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=`;
let btn=document.querySelector(".btn");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    const input=document.querySelector("input");
    const searchbarvalue=input.value;
    wheatherdetails(searchbarvalue);
    input.value="";
})

async function wheatherdetails(searchbarvalue){
    try{
    const res= await axios.get(url +searchbarvalue);
    console.log(res);
    const location=res.data.location.name;
    const Precipitation=res.data.current.precip_mm;
    const Humidity=res.data.current.humidity;
    const wind=res.data.current.wind_kph;
    const temperature=res.data.current.temp_c;
    const currentvar=res.data.current.last_updated;
    const text=res.data.current.condition.text;
    changeText(text);
    currentWeather(currentvar);
    changetemperature(temperature);
    changeotherdetails(Precipitation,Humidity,wind);
    changelocation(location);
    changeImages(res);}
    catch(err){
        Errorlocation.classList.add("errortext")
        Errorlocation.innerHTML="You Enter Wrong location!<br>Please Check Again"
        btn.addEventListener("click",()=>{
            Errorlocation.classList.remove("errortext");
        })
        
    }
} 
function changelocation(location){
    const locat=document.querySelector(".location");
    locat.innerText=location;
}
function changeotherdetails(Precipitation,Humidity,wind){
    Precip=document.querySelector(".Precipitation");
    Precip.innerText=Precipitation;
    humid=document.querySelector(".Humidity");
    humid.innerText=Humidity;
    wend=document.querySelector(".wind");
    wend.innerText=wind;
}
function changetemperature(temperature){
    const temp=document.querySelector(".temperature");
    temp.innerHTML=`${temperature} &deg;C`;
}
 function currentWeather(currentvar){
    currentTime.innerHTML=`Current Time:${currentvar}`;
}
function changeText(text){
    weatherText.innerHTML=text;
}

function changeImages(res){
    const img=document.querySelector(".image");
    if (img){
        const imgcodes=res.data.current.condition.code;
        const imgmapping={
           1000:"weatherAppImages/clear.png",
           1003:"weatherAppImages/clouds.png",
           1006:"weatherAppImages/clouds.png",
           1009:"weatherAppImages/clouds.png",
           1030:"weatherAppImages/mist.png",
           1063:"weatherAppImages/rain.png",
           1066:"weatherAppImages/snow.png",
           1069:"weatherAppImages/snow.png",
           1072:"weatherAppImages/drizzle.png",
           1087:"weatherAppImages/drizzle.png",
           1114:"weatherAppImages/snow.png",
           1117:"weatherAppImages/snow.png",
           1135:"weatherAppImages/snow.png",
           1147:"weatherAppImages/snow.png",
           1150:"weatherAppImages/drizzle.png",
           1153:"weatherAppImages/drizzle.png",
           1168:"weatherAppImages/drizzle.png",
           1171:"weatherAppImages/drizzle.png",
           1180:"weatherAppImages/rain.png",
           1183:"weatherAppImages/rain.png",
           1186:"weatherAppImages/rain.png",
           1189:"weatherAppImages/rain.png",
           1192:"weatherAppImages/rain.png",
           1195:"weatherAppImages/rain.png",
           1198:"weatherAppImages/rain.png",
           1201:"weatherAppImages/rain.png",
           1204:"weatherAppImages/rain.png",
           1207:"weatherAppImages/rain.png",
           1210:"weatherAppImages/snow.png",
           1213:"weatherAppImages/snow.png",
           1216:"weatherAppImages/snow.png",
           1219:"weatherAppImages/snow.png",
           1222:"weatherAppImages/snow.png",
           1225:"weatherAppImages/snow.png",
           1237:"weatherAppImages/snow.png",
           1240:"weatherAppImages/rain.png",
           1243:"weatherAppImages/rain.png",
           1246:"weatherAppImages/rain.png",
           1249:"weatherAppImages/rain.png",
           1252:"weatherAppImages/rain.png",
           1255:"weatherAppImages/snow.png",
           1258:"weatherAppImages/snow.png",
           1261:"weatherAppImages/snow.png",
           1264:"weatherAppImages/snow.png",
           1273:"weatherAppImages/rain.png",
           1276:"weatherAppImages/rain.png",
           1279:"weatherAppImages/snow.png",
           1282:"weatherAppImages/snow.png",
        }
    img.setAttribute("src",imgmapping[imgcodes]);
    }
}

const url1=`http://api.weatherapi.com/v1/current.json?key=${key}&q=lucknow`;
async function lucknowWeather(){
    const res1= await axios.get(url1);
    //console.log(res1);
    lucknowtemperature.innerText=res1.data.current.temp_c;
    lucknowpercipitation.innerText=res1.data.current.precip_mm;
    lucknowhumidity.innerText=res1.data.current.humidity;
    lucknowwind.innerText=res1.data.current.wind_kph;
}
lucknowWeather();

const url2=`http://api.weatherapi.com/v1/current.json?key=${key}&q=delhi`;
async function DelhiWeather(){
    const res2= await axios.get(url2);
    //console.log(res2);
    Delhitemperature.innerText=res2.data.current.temp_c;
    Delhipercipitation.innerText=res2.data.current.precip_mm;
    Delhihumidity.innerText=res2.data.current.humidity;
    Delhiwind.innerText=res2.data.current.wind_kph;
}
DelhiWeather();

const url3=`http://api.weatherapi.com/v1/current.json?key=${key}&q=mumbai`;
async function MumbaiWeather(){
    const res3= await axios.get(url3);
    //console.log(res3);
    Mumbaitemperature.innerText=res3.data.current.temp_c;
    Mumbaipercipitation.innerText=res3.data.current.precip_mm;
    Mumbaihumidity.innerText=res3.data.current.humidity;
    Mumbaiwind.innerText=res3.data.current.wind_kph;
}
MumbaiWeather();

window.addEventListener('load', () => {
    const input = document.querySelector('input[type="search"]');
    if (input) {
      input.focus();
    }
  });
  