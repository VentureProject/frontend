import React from "react";
import styled from "styled-components";
import ExProduct from "../images/ExProduct.png";

function Product() {
  return (
    <Wrapper>
      <PhotoWrapper src={ExProduct}></PhotoWrapper>
      <DetailWrapper>
        <ProductDetail>브랜드명</ProductDetail>
        <ProductDetail>코트 워셔블 후드니트</ProductDetail>
        <ProductDetail marginbottom="5px" color="#9e9e9e" fontSize="24px">
          옵션 M
        </ProductDetail>
        <ProductDetail color="#9e9e9e" fontSize="24px">
          2023.06.02 구매
        </ProductDetail>
      </DetailWrapper>
      <DetailWrapper>42000원</DetailWrapper>
      <DetailWrapper>
        <ReviewButton>일반후기 작성하기</ReviewButton>
        <ReviewButton>포토후기 작성하기</ReviewButton>
      </DetailWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-contents: center;
  background-color: white;
  height: 220px;
  color: black;
  font-size: 32px;
  padding: 15px;
  margin: 15px;
`;

const PhotoWrapper = styled.img`
  width: 160px;
  height: 190px;
`;

const DetailWrapper = styled.div`
  width: 320px;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
`;

const ProductDetail = styled.div`
  margin-top: ${(props) => props.margintop || "0px"};
  margin-bottom: ${(props) => props.marginbottom || "15px"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "32px"};
`;

const ReviewButton = styled.button`
  color: white;
  background-color: black;
  border: 0px;
`;

export default Product;
