import React from 'react'
import styled from 'styled-components';
import {useState, useEffect} from 'react';


const Header = ({onInputChange}) => {
  

  return (
        <HeaderStyle>
            <div>
            <input type="text" className="search" placeholder="type in your location" onChange={(e)=>onInputChange(e.target.value)} />
            </div>
    
        </HeaderStyle>

  );
}
const HeaderStyle = styled.form `
.search{
    margin: 10px auto;
    display: block;
    padding: 14px 16px;
    width: 300px;
    border-radius:15px;
    background: transparent;
    border: 2px black solid;
    color:white;
    outline: none;
}

`

export default Header