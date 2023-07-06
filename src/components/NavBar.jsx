import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import HamburgerBar from "../images/HamburgerBar.png";
import Cancel from "../images/Cancel.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon>
          <ImgIcon src={HamburgerBar} />
        </MenuIcon>
      </MenuButton>
      <SidebarWrapper open={isMenuOpen}>
        <SidebarContent>
          <CloseButton onClick={toggleMenu}>
            <ImgIcon src={Cancel} />
          </CloseButton>
          <MenuItem margintop={"115px"}>마이페이지</MenuItem>
          <MenuItem>
            <MenuDetail>구매내역</MenuDetail>
            <MenuDetail>후기작성 | 적립금 확인</MenuDetail>
          </MenuItem>
          <MenuItem>배송조회</MenuItem>
          <MenuItem>쿠폰함</MenuItem>
          <MenuItem>환경설정</MenuItem>
        </SidebarContent>
      </SidebarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  background-color: black;
  color: white;
  width: 100%;
  height: 115px;
`;

const MenuButton = styled.button`
  position: absolute;
  top: 42px;
  left: 35px;
  background: none;
  border: none;
  cursor: pointer;
`;

const MenuIcon = styled.span`
  font-size: 24px;
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  width: 80%;
  max-width: 32%;
  height: 100%;
  background-color: black;
  color: white;
  transition: left 0.5s ease-in-out;
  z-index: 999;
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const SidebarContent = styled.div`
  padding: 20px;
  animation: ${slideIn} 0.7s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const MenuItem = styled.div`
  top: 10px;
  margin-top: ${(props) => props.margintop || "0px"};
  margin-bottom: 20px;
  font-size: ${(props) => props.fontSize || "24px"}; ;
`;

const MenuDetail = styled.div`
  top: 10px;
  margin-top: ${(props) => props.margintop || "0px"};
  margin-bottom: 20px;
  font-size: ${(props) => props.fontSize || "24px"}; ;
`;

const ImgIcon = styled.img``;

export default Navbar;
