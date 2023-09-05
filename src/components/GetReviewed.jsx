import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReviewModal from "./ReviewModal";

function GetReviewed() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // 추가: 선택된 데이터를 저장하는 상태

  const showModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  const [response, setResponse] = useState(null);

  const sendTextToServer = async () => {
    try {
      const response = await fetch("http://0.0.0.0:8000/photoReview", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setResponse(data);
      } else {
        console.error("Request failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  useEffect(() => {
    sendTextToServer(); // 페이지가 로드될 때 함수 실행
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <>
      {/* <button onClick={sendTextToServer}>Send Text</button> */}
      {/* {sendTextToServer()} */}
      <GlobalStyle />
      <hr />
      {response && (
        <>
          <Wrapper>
            <DetailWrapper width="15%">
              <PhotoWrapper src={response.imgUrl}></PhotoWrapper>
            </DetailWrapper>
            <DetailWrapper width="35%">
              <ProductDetail>{response.brandName}</ProductDetail>
              <ProductDetail>{response.productName}</ProductDetail>
            </DetailWrapper>
            <DetailWrapper width="10%">
              <ProductDetail fontSize="20px">{response.option}</ProductDetail>
            </DetailWrapper>
            <DetailWrapper width="20%">
              <ProductDetail fontSize="20px">{response.date}</ProductDetail>
            </DetailWrapper>
            <DetailWrapper width="20%">
              {(response.isPhotoReviewed && (
                <ProductDetail fontSize="20px">
                  적립금이 지급되었습니다
                </ProductDetail>
              )) || (
                // <ProductDetail fontSize="20px">
                //   적립금이 적립되지 않았습니다. 사유 : {response.whyRejected}
                // </ProductDetail>
                <DetailWrapper>
                  <ReviewButton onClick={() => showModal(response)}>
                    포토후기 재작성
                  </ReviewButton>
                  <Reject>미지급 사유 : {response.whyRejected}</Reject>
                  {modalOpen && (
                    <ReviewModal
                      setModalOpen={setModalOpen}
                      modalData={modalData}
                    />
                  )}
                </DetailWrapper>
              )}
            </DetailWrapper>
          </Wrapper>
          <hr />
        </>
      )}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding:0px;
    margin:0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  //   background-color: white;
  height: 120px;
  color: black;
  font-size: 32px;
  padding: 15px;
  margin: 6px 12px;
`;

const PhotoWrapper = styled.img`
  width: 96px;
  height: 108px;
`;

const DetailWrapper = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
`;

const ProductDetail = styled.div`
  margin-top: ${(props) => props.margintop || "0px"};
  margin-bottom: ${(props) => props.marginbottom || "0px"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
`;

const ReviewButton = styled.button`
  width: 200px;
  height: 50px;
  margin-bottom: 5px;
  font-size: 20px;
  color: red;
  background-color: white;
  border: 2px solid red;
  &:hover {
    cursor: pointer;
  }
`;
const Reject = styled.div`
  color: red;
  font-size: 12px;
`;

export default GetReviewed;
