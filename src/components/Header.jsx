import React, { useState } from 'react'
import styled from 'styled-components';


const Header = ({onInputChange}) => {
  const[inputValue, setInputValue] = useState("")

  const handleSubmit = () => {
    console.log(inputValue)
    onInputChange(inputValue)
  }
  

  return (
        <HeaderStyle>
            <div style={{display:"flex", margin:"0px auto", alignItems:"center"}}>
            <input type="text" className="search" placeholder="type in your location" onChange={(e)=> setInputValue(e.target.value)} />
            <button className='button' onClick={handleSubmit}>Search</button>
            </div>
    
        </HeaderStyle>

  );
}
const HeaderStyle = styled.div `
.search{
    margin: 10px auto;
    display: block;
    padding: 14px 16px;
    width: 300px;
    border-radius:15px;
    background: transparent;
    border: 2px black solid;
    color:#000;
    outline: none;
    font-size: 20px;
}

.button{
  border-radius:15px;
  border: 2px black solid;
  color:#000;
  outline: none;
  font-size: 20px;
  padding: 14px 16px;
  margin-left:4px;
  background: transparent;


}

`


export default Header