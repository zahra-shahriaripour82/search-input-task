import Input from "./components/Input";
// import "./cities.json";

import  cities from"./cities.json";
import { useState } from "react";
function App(){

   //مقداری که کاربر وارد میکنه اینجا میاد 
const[selectCity,setSlectCity]=useState("");
//مقدار شهرها رو اینجا دارم
const [cityName,setCityName]=useState(cities);





const handleChange=(e)=>{
   const value=e.target.value;
   setSlectCity(value);
//  findCity()



// const citySugges= cities.filter(( city)=> city.toLowerCase().includes(selectCity));
const citySugges=cities.find(city => city.startsWith(selectCity));
  console.log(citySugges);
  if(citySugges){

     setCityName(citySugges);
  }else{
   selectCity("no city foind")
  }
   
  
}

//  const findCity=()=>{
//   const citySugges= cities.filter(( city)=> city.toLowerCase().includes(selectCity))
  
//    setCityName(citySugges)
   
// }
//  findCity()
console.log(selectCity);
console.log(cityName);

   return (
<>
<Input selectCity={selectCity} handleChange={handleChange} citySugges={cityName}/>





</>




   ) 


}

export default App
