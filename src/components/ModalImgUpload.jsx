import { useState } from "react";
import styled from "styled-components";
import Camera from "../images/Camera.png";

const ModalImgUpload = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };
  return (
    <Wrapper>
      <Input
        accept="image/*"
        multiple
        type="file"
        onChange={(e) => onUpload(e)}
        id="input-file"
      />
      <Label for="input-file">
        <LabelImg src={Camera} />
        <div>사진 업로드</div>
      </Label>
      <Img src={imageSrc} />
    </Wrapper>
  );
};

export default ModalImgUpload;

const Wrapper = styled.div`
  background-color: white;
  // margin: 5px;
  border-radius: 5px;
  width: 40%;
  height: 240px;
`;

const Img = styled.img`
  heigth: 240px;
  // width: 80%;
  position: relative;
  top: -240px;
  z-index: 1;
`;

const Label = styled.label`
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const Input = styled.input`
  display: none;
`;
const LabelImg = styled.img`
  //   position: relative;
  //   top: -240px;
`;
