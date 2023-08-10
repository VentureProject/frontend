import React, { useState } from "react";
import styled from "styled-components";
import ModalImgUpload from "./ModalImgUpload";
import X from "../images/X.png";
import xOver from "../images/XOver.png";

function ReviewModal({ setModalOpen, id, title, content, writer }) {
  const [xImg, setXImg] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <XButton
        onMouseOver={() => setXImg(true)}
        onMouseOut={() => setXImg(false)}
        src={xImg ? xOver : X}
        onClick={closeModal}
      />
      <Box>포토후기 작성하기</Box>
      <Box>aaa</Box>
      <ModalImgUpload />
    </Wrapper>
  );
}

export default ReviewModal;

const Wrapper = styled.div`
  position: absolute;
  width: 70%;
  border-radius: 5px;
  background-color: black;
  top: 160px;
  left: 15%;
`;

const XButton = styled.img`
  width: 15px;
  height: 15px;
  margin: 0px 10px;
`;

const Box = styled.div`
  background-color: white;
  margin: 5px;
  border-radius: 5px;
  height: 55px;
  font-size: 24px;
`;

const ImgUpload = styled.div``;
