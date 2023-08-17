import React from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import ReviewedProduct from "../components/ReviewedProduct";

function Reward() {
  return (
    <Wrapper>
      <Navbar />
      <TitleBox> 적립금 확인하기 </TitleBox>
      <BodyBox>
        <SmallTitle>
          <SmallTitleA width="50%">상품명</SmallTitleA>
          <SmallTitleA>옵션</SmallTitleA>
          <SmallTitleA>구입날짜</SmallTitleA>
          <SmallTitleA>지급내용</SmallTitleA>
        </SmallTitle>
        <ReviewedProduct />
      </BodyBox>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: relative;
  background-color: #eeeeee;
  color: white;
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.nav`
  box-sizing: border-box;
  background-color: white;
  height: 98px;
  color: black;
  font-size: 32px;
  padding: 27px;
  margin: 12px 12px 6px 12px;
`;
const BodyBox = styled.div`
  padding: 0px;
  background-color: white;
  height: 70%;
  color: black;
  font-size: 32px;
  padding: 27px;
  margin: 12px 12px 6px 12px;
`;
const SmallTitle = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  display: flex;
  //   justify-content: space-around;
  font-size: 20px;
`;
const SmallTitleA = styled.a`
  font-size: 24px;
  width: ${(props) => props.width};
`;

export default Reward;
