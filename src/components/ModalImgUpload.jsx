import { useState } from "react";
import styled from "styled-components";

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
      <input
        accept="image/*"
        multiple
        type="file"
        onChange={(e) => onUpload(e)}
      />
      <img width={"100%"} src={imageSrc} />
    </Wrapper>
  );
};

export default ModalImgUpload;

const Wrapper = styled.div`
  background-color: white;
  margin: 5px;
  border-radius: 5px;
  width: 40%;
  height: 240px;
`;
