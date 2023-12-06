import React, { useState } from "react"
import '../Search/Search.css'
import { Navigate, useNavigate } from "react-router-dom";
export default function Search()
{
    const options = ['Technology', 'Music', 'Science', 'History'];
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionClick = (option) => {
        setSelectedOption("");
      setSelectedOption(option);
      navigate(`/dashboard?catName=${selectedOption}`)
    };
    const [searchUser,setSearchUser]=useState('');
    const navigate=useNavigate();
    return(

        <>
            <div className="search-div">
                <div className="search">
                 <div className="search-input-div">  <i className="topSearchIcon fas fa-search"></i> <input type="text" placeholder="search by username" value={searchUser} onChange={(e)=>{
                    e.preventDefault();
                    setSearchUser(e.target.value)
                 }}/></div> 
                 <div className="search-btn-div">
                    <button className="search-btn" onClick={(e)=>{
                        e.preventDefault();
                        console.log(searchUser);
                        navigate(`/dashboard?username=${searchUser}`)
                    }}><i class="fa-solid fa-arrow-right"></i></button></div>
                </div>


            </div>

            <div className="dropdown">
      <select className="dropdown-select">
        {options.map((option, index) => (
          <option key={index} value={option} onClick={() => handleOptionClick(option)}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && <p>Selected Option: {selectedOption}</p>}
    </div>
        </>
    )
}