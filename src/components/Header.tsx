import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderComponent>
      <h1>To-do-list</h1>
      <span>by react</span>
    </HeaderComponent>
  );
}
const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ade481;
  color: #fff;
  padding: 10px 30px;
  border-radius: 10px;
`;
export default Header;
