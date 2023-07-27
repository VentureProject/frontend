import React from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import ClothesMenu from "../components/ClothesMenu";
import Banner from "../images/Banner.png";
import MainImg from "../images/MainImg.png";
// import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Navbar />
      <BannerImg src={Banner} />
      <ClothesMenu />
      <ProductImg src={MainImg} />
    </div>
  );
}

const BannerImg = styled.img`
  width: 100%;
`;

const ProductImg = styled.img`
  width: 100%;
`;

export default Main;
