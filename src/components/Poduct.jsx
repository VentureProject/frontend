import React, { useState } from "react";
import styled from "styled-components";
import ExProduct from "../images/ExProduct.png";
import ReviewModal from "./ReviewModal";

function Product() {
  // const [brandName, setBrandName] = useState("");
  // const [productName, setProductName] = useState("");
  // const [option, setOption] = useState("");
  // const [date, setDate] = useState("");
  // const [price, setPrice] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const sampleData = [
    {
      brandName: "키뮤어",
      productName: "코튼 워셔블 후드니트",
      option: "M",
      date: "2023-06-24",
      price: 32000,
    },
    {
      brandName: "토피",
      productName: "데님펜츠",
      option: "31",
      date: "2023-06-31",
      price: 48000,
    },
    {
      brandName: "쿠어",
      productName: "가디건",
      option: "XL",
      date: "2023-07-11",
      price: 22000,
    },
  ];

  return (
    <>
      {sampleData.map((el) => (
        <Wrapper>
          <PhotoWrapper src={ExProduct}></PhotoWrapper>
          <DetailWrapper>
            <ProductDetail>{el.brandName}</ProductDetail>
            <ProductDetail>{el.productName}</ProductDetail>
            <ProductDetail marginbottom="5px" color="#9e9e9e" fontSize="24px">
              사이즈 : {el.option}
            </ProductDetail>
            <ProductDetail color="#9e9e9e" fontSize="24px">
              {el.date}
            </ProductDetail>
          </DetailWrapper>
          <DetailWrapper>{el.price}원</DetailWrapper>
          <DetailWrapper>
            <ReviewButton>일반후기 작성하기</ReviewButton>
            <div>
              <ReviewButton onClick={showModal}>포토후기 작성하기</ReviewButton>
              <div
                style={{
                  position: "absolute",
                  width: "70%",
                  backgroundColor: "yellow",
                  top: "100px",
                  left: "40%",
                }}
              >
                {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
              </div>
            </div>
            {/* <ReviewButton>포토후기 작성하기</ReviewButton> */}
          </DetailWrapper>
        </Wrapper>
      ))}
    </>
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
  width: 240px;
  height: 50px;
  margin: 5px;
  font-size: 20px;
  color: white;
  background-color: black;
  border: 0px;
`;

export default Product;
