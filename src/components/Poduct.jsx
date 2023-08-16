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
  const [modalData, setModalData] = useState(null); // 추가: 선택된 데이터를 저장하는 상태

  const showModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  const sampleData = [
    {
      imgUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_4131475%2F41314753854.jpg&type=a340",
      userImgUrl: "",
      brandName: "키뮤어",
      productName: "코튼 워셔블 후드니트",
      option: "M",
      date: "2023-06-24",
      price: 32000,
      isPhotoReviewed: false,
    },
    {
      imgUrl:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_4156557%2F41565573442.jpg&type=a340",
      userImgUrl: "",
      brandName: "토피",
      productName: "SL01 섬머 데님 와이드 팬츠 (BLACK)",
      option: "31",
      date: "2023-06-31",
      price: 48000,
      isPhotoReviewed: false,
    },
    {
      imgUrl:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_4002671%2F40026718527.20230514220134.jpg&type=a340",
      userImgUrl: "",
      brandName: "쿠어",
      productName: "소프트 부클 카라 단추 가디건",
      option: "XL",
      date: "2023-07-11",
      price: 22000,
      isPhotoReviewed: false,
    },
  ];

  return (
    <>
      {sampleData.map((el, index) => (
        <Wrapper key={index}>
          <DetailWrapper width="20%">
            <PhotoWrapper src={el.imgUrl}></PhotoWrapper>
          </DetailWrapper>
          <DetailWrapper width="40%">
            <ProductDetail>{el.brandName}</ProductDetail>
            <ProductDetail>{el.productName}</ProductDetail>
            <ProductDetail marginbottom="5px" color="#9e9e9e" fontSize="20px">
              사이즈 : {el.option}
            </ProductDetail>
            <ProductDetail color="#9e9e9e" fontSize="20px">
              가격 : {el.price}원
            </ProductDetail>
          </DetailWrapper>
          <DetailWrapper width="20%">
            <ProductDetail fontSize="24px">{el.date}</ProductDetail>
          </DetailWrapper>
          <DetailWrapper>
            <ReviewButton>일반후기 작성하기</ReviewButton>
            <ReviewButton onClick={() => showModal(el)}>
              포토후기 작성하기
            </ReviewButton>
            {modalOpen && (
              <ReviewModal setModalOpen={setModalOpen} modalData={modalData} />
            )}
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
  height: 200px;
  color: black;
  font-size: 32px;
  padding: 15px;
  margin: 6px 12px;
`;

const PhotoWrapper = styled.img`
  width: 160px;
  height: 190px;
`;

const DetailWrapper = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
`;

const ProductDetail = styled.div`
  margin-top: ${(props) => props.margintop || "0px"};
  margin-bottom: ${(props) => props.marginbottom || "10px"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "28px"};
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
