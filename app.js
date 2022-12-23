

function get(){

     var city= document.getElementById("city").value;
     console.log(city);
     if(city.length==0){
        city="Delhi";
     }
     var p= document.getElementById("detail");
     p.innerHTML=city;
    var API_key="7e9e005a9a4910089cbf3673d906de45";
    var str=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

    console.log(str);

    fetch(str).then(function (Response){
          return Response.json();  
    }).then( function (data){

        console.log(data.main.temp);
        p.innerHTML= `Temp on ${city} is ${Math.floor(data.main.temp-273.15)} <sup>o</sup> C`;
    })

   


   

}

// get();
