/* eslint-disable react/prop-types */

import { FaSearch } from "react-icons/fa";



const Input = ({handleChange, hint,selectCity,citySugges}) => {
 
  console.log(citySugges);
 
  
  return (
    <div className="input">
      <label htmlFor="input" >
        { selectCity &&citySugges}
        {/* {hint} */}
      </label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        value={selectCity}
        placeholder=" type for search 🔍"
      />

    </div>
    
  );
  
};

export default Input;
