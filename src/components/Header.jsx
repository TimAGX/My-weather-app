import React from 'react'
import styled from 'styled-components';

const Header = () => {

    // const [input, setInput] = useState("");

  return (
        <HeaderStyle>
            <div>
            <input type="text" class="search" placeholder="type in your location" onchange="setAddress()"/>
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
    border: 2px white solid;
    color:white;
    outline: none;
}
`

export default Header