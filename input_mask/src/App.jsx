import Input from "./components/Input";
// import "./cities.json";

import  cities from"./cities.json";
import { useState } from "react";
function App(){
 
const[selectCity,setSlectCity]=useState("");

const [cityName,setCityName]=useState(cities);





const handleChange=(e)=>{
   const value=e.target.value;
   setSlectCity(value);




const citySugges=cities.find(city => city.startsWith(selectCity));
  console.log(citySugges);
  if(citySugges){

     setCityName(citySugges);
  }else{
   selectCity("no city foind")
  }
   
  
}


console.log(selectCity);
console.log(cityName);

   return (
<>
<Input selectCity={selectCity} handleChange={handleChange} citySugges={cityName}/>





</>




   ) 


}

export default App
