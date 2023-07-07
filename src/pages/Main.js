import React from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import ClothesMenu from "../components/ClothesMenu";
import Banner from "../images/Banner.png";
// import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Navbar />
      <BannerImg src={Banner} />
      <ClothesMenu />
    </div>
  );
}

const BannerImg = styled.img`
  width: 100%;
`;

export default Main;
